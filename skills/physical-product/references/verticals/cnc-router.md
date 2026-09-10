# CNC router pipeline (LowRider-class machines)

Applies when the workshop profile lists a CNC router and the product has
flat plate parts. Honest scope: the pack produces **exact nominal DXF
geometry**; toolpaths, tool-diameter compensation, tabs, feeds and depths
belong in the CAM software (Estlcam, Kiri:Moto, Carbide Create) — never
pre-compensate the DXF.

## Which parts qualify

Flat plates: constant thickness (bbox smallest dim == material thickness)
with all features — outline, holes, pockets — machinable from one side.
Bent or turned parts need their flat pattern or section drawn explicitly;
a 3D relief is out of scope for this recipe.

## The right DXF source — face wires, NOT projected views

The drawing sheets' DXF (`write(dxf=True)`) is for humans: it contains
frame, dims and — critically — **projected** geometry. Projection via
`project_to_viewport` carries a mild perspective residual (~0.3 %) and
tangent edges (fillet silhouettes) that a CAM program would happily cut.
For CAM, export the part's planar face wires instead — exact by
construction:

```python
# cam_dxf.py recipe — drop into the project when CNC parts exist
from build123d import *
from build123d import ColorIndex
import model

exp = ExportDXF(unit=Unit.MM)
exp.add_layer("cut")
part = model.PARTS["plate"].builder()
# the machined face: largest face perpendicular to the tool axis (here Z)
face = max(part.faces().filter_by(Plane.XY), key=lambda f: f.area)
exp.add_shape(face, layer="cut")     # outer wire + hole wires, exact 1:1
exp.write("out/cam/plate.dxf")
```

- One DXF per part, model mm, 1:1 — CAM imports it directly.
- Interior wires (holes, pockets' openings) come along with the face;
  pocket DEPTHS are not in the DXF — state them in the drawing / BOM note
  and set them in CAM.
- Verify by re-importing (`import_dxf`) or opening in the CAM program and
  checking one known dimension before cutting anything.

## CAM-side checklist (goes into the build sheet's procedure section)

1. Tool-diameter compensation ON (profile outside / holes inside).
2. Tabs on outer profiles; skip tabs on holes smaller than the tab.
3. Climb vs conventional per material (wood: climb finish pass).
4. Depth per pass ≤ tool diameter/2 for wood, less for plywood edges.
5. First run: air pass at +5 mm Z.

## Aluminium on a hobby router

Small aluminium parts (openers, brackets, plates from 6082/5754 sheet) machine
well on a LowRider-class frame when the recipe respects the machine, not the
material catalogue:

- **Tool:** single-flute carbide (1Z, 3–6 mm) for chip evacuation; never a
  wood spiral. Sharp, short stick-out.
- **Passes:** shallow — 0.3–0.5 mm per pass for 6082 on a hobby frame
  (rigidity, not the tool, sets the limit); full-width slots slower than
  profile passes; climb for finish.
- **Lubrication/cooling:** WD-40 or isopropanol mist by hand every few
  passes; dry aluminium welds chips to the flute within seconds.
- **Order of operations:** engraving first (flat, clamped stock, no bridges
  in the way), then pockets, then the outer profile with tabs last.
- **Chamfers and edge breaks** on the finished part are hand work (file,
  deburring tool) unless the workshop has a chamfer mill — say so in the
  build plan, do not draw them as machined.
- **Blank margin:** the stock needs room for tabs and hold-down screws
  around the outline — declare it as a cut-plan parameter
  (`CNC_MARGIN`, e.g. 15 mm per side) in `cutlist.py`'s STOCK, never as a
  hidden override of the part size.
- **Verify the DXF before the first cut** exactly as above (re-import, one
  known dimension), then an air pass at +5 mm.

## Build sheet integration

CNC parts get a BOM note (`mill per out/cam/<part>.dxf`), and the footer
lists the cam DXF paths beside the drawing sources.

## Future

`ocp-freecad-cam` (Apache) drives FreeCAD Path from build123d shapes —
full gcode generation without leaving Python. Not adopted: heavyweight
FreeCAD dependency and young API; revisit when a project actually needs
in-pipeline gcode.

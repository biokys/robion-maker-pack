# CNC router pipeline (LowRider-class machines)

Applies when the workshop profile lists a CNC router and the product has
flat plate parts. Honest scope: the pack produces **exact nominal DXF
geometry**; toolpaths, tool-diameter compensation, tabs, feeds and depths
belong in the CAM software (Estlcam, Kiri:Moto, Carbide Create) — never
pre-compensate the DXF.

## Which parts qualify

Flat plates: constant thickness (bbox smallest dim == material thickness)
with all features — outline, holes, pockets — machinable from one side.
Bent or turned parts need their rozvin/section drawn explicitly; a 3D
relief is out of scope for this recipe.

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
part = model.PARTS["deska"].builder()
# the machined face: largest face perpendicular to the tool axis (here Z)
face = max(part.faces().filter_by(Plane.XY), key=lambda f: f.area)
exp.add_shape(face, layer="cut")     # outer wire + hole wires, exact 1:1
exp.write("out/cam/deska.dxf")
```

- One DXF per part, model mm, 1:1 — CAM imports it directly.
- Interior wires (holes, pockets' openings) come along with the face;
  pocket DEPTHS are not in the DXF — state them in the drawing / kusovník
  note and set them in CAM.
- Verify by re-importing (`import_dxf`) or opening in the CAM program and
  checking one known dimension before cutting anything.

## CAM-side checklist (goes into the build sheet's Postup)

1. Tool-diameter compensation ON (profile outside / holes inside).
2. Tabs on outer profiles; skip tabs on holes smaller than the tab.
3. Climb vs conventional per material (wood: climb finish pass).
4. Depth per pass ≤ tool diameter/2 for wood, less for plywood edges.
5. First run: air pass at +5 mm Z.

## Build sheet integration

CNC parts get a kusovník note (`frézovat dle out/cam/<part>.dxf`), and the
footer lists the cam DXF paths beside the drawing sources.

## Future

`ocp-freecad-cam` (Apache) drives FreeCAD Path from build123d shapes —
full gcode generation without leaving Python. Not adopted: heavyweight
FreeCAD dependency and young API; revisit when a project actually needs
in-pipeline gcode.

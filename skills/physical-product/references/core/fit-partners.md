# Fit partners — real dimensions of what the product mates with

Almost every product touches something that already exists: the board in an
enclosure, the wall a shelf hangs on, the aquarium a stand carries, the printer
bed a part must fit. Those dimensions are never guessed. This recipe says where
they come from, in the order to try, and how they enter the model.

## Ask at intake

One question in the round, concrete: "What does it mate with? Name the 3–6
dimensions I need (outer size, hole pattern, connector positions, the face
each sits on) or point me at a drawing, a STEP file or a photo with a ruler."
Record the answer as a question (`decidedBy: user`) and every value you
derive from it as an assumption in the build sheet, with its source.

## Sources, best first

1. **Vendor STEP / 3D model.** `import_step(path)` in build123d; keep it as a
   *reference part* (below) — the fit check runs against the real geometry.
2. **Vendor PDF drawing (vector).** Numbers printed on the sheet are text; the
   geometry is vector. Extract both instead of reading a raster:

   ```
   uv run --with pdfplumber python - <<'PY'
   import pdfplumber
   with pdfplumber.open("vendor.pdf") as pdf:
       page = pdf.pages[0]
       print(page.extract_text())                 # dimension texts
       for r in page.rects[:40]: print(r["x0"], r["top"], r["width"], r["height"])
       for l in page.lines[:40]: print(l["x0"], l["top"], l["x1"], l["bottom"])
   PY
   ```

   A 1:1 sheet has 72 pt per inch = 2.8346 pt per mm; pick the origin from the
   outline rectangle and convert. A side view yields heights the vendor never
   states (the Raspberry Pi 5 Active Cooler is 13 mm tall — from its side view,
   not from any table). Write the scale and the origin you used into the
   project's README so a later session can repeat it.
3. **Calipers.** Ask for the named dimensions; one photo of the calipers on the
   part beats a description.
4. **Photo with a ruler.** Last resort, ±1 mm at best; say so in the assumptions.

## Reference parts in the model

A mating object lives in `PARTS` like any part, with `reference=True`
(`PartSpec` in `templates/solids/model.py`): it is built, exported to
`out/parts/` and takes part in `make check` (clearances, collisions) and in
Blender scenes (an `(material, euler)` entry shows it in place), but it has no
BOM row, no drawing and no cut-plan piece — the user does not make it. Name it
after the thing (`pi5_board`, `wall`, `tank`), give it the plain material
(`plastic()`, `powder_coat()`), and keep its dimensions in the parameters block
under a `# reference: <source>` comment.

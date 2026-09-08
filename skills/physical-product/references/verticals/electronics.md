# Electronics playbook — products with a PCB inside

## When this applies

Any product containing a custom PCB or wired electronics: sensor boxes,
controllers, LED fixtures, front-panel instruments. Almost always combines
with 3d-print (enclosure) or laser (front panel). The PCB *authoring* recipe
lives in the stack: [../stacks/pcb.md](../stacks/pcb.md) — this playbook is
the product process around it. Out of scope: mains-voltage design review — see
safety gates.

## Intake additions

- What the circuit does, inputs/outputs, connectors (exact types and which
  face each sits on — they drive enclosure cutouts).
- User interface: buttons (what each does), indicator LEDs, display type and
  size, labels and their language — every one of these moves the board.
- Power: source, runtime target vs cell size, charging, power budget.
- Electronics route: off-the-shelf module vs custom board; assembly service
  vs hand soldering; budget.
- Fab plan: order boards (JLCPCB, PCBWay, or a board house in the user's own
  market) vs etch at home — drives design rules (min trace/space, vias).
- Firmware: which MCU ecosystem the user already works with — firmware itself
  is a software project (plain Claude Code, no skill needed), this playbook
  only hands off to it.

## Stack & stage refinements

Stacks: **pcb** for the board, **solids** for the enclosure — they meet at the
fit gate.

- **Concept first** — the schematic exists only after the concept gate
  (SKILL.md §1): a block layout of the board inside the enclosure, connector
  faces and the UI agreed. Routing is the expensive, order-dependent step —
  once per freeze, never per iteration.
- **Schematic → ERC → placement → DRC → routing → DRC** — per
  [../stacks/pcb.md](../stacks/pcb.md); checks run headless via `kicad-cli`
  and belong in the cockpit as status tiles. Zero ERC/DRC warnings before the
  user sees "done" — waivers are listed with reasons.
- **Enclosure fit** — export the board STEP (with connectors) into the solids
  assembly; `make check` treats board-vs-enclosure interference as a real
  collision. Connector cutouts derive from the board model, never retyped
  offsets. *Gate:* the fit render.
- **BOM** — two tables: PCB BOM with manufacturer part numbers first and
  distributor part numbers second, and the mechanical BOM (standoffs, screws,
  glands). Fab outputs (gerbers + drill + placement) zip per the fab's naming
  rules.
- **Make plan** — ordering step (fab + parts), assembly order (SMD first if
  hand-soldering, then THT, then mechanical), bring-up checklist: visual
  inspection → shorts check on power rails (continuity buzzer) →
  current-limited first power-up → then firmware flash.
- **Analysis** — replace FEA with the electrical sanity pass: power budget
  adds up, connector current ratings, trace width for the max current, and
  thermal sanity for regulators.

## Materials & stock

Parts are identified by manufacturer part number — that survives any market;
distributor part numbers come second. Global distributors (Mouser, Farnell,
Digi-Key) and global board fabs (JLCPCB, PCBWay) may be named directly; for
hobby modules and local stock, name vendors from the user's own market — the
workshop profile may name preferred suppliers, never invent one. Mechanical
BOM: standoffs, machine screws, cable glands by thread size. Leave prices per
project.

## Last mile

The user orders boards and parts from the BOM, solders per the assembly order,
runs the bring-up checklist, then flashes firmware — at which point the
project continues as a software project in the same repo (firmware/ dir), no
skill needed. ESPHome: `esphome config` validates the YAML but does not
compile lambdas — only `esphome compile` is the real check.

## Safety gates

The agent never claims a design is safe for **mains voltage (230 V)** — if the
product touches mains, the build sheet must state that a qualified person has
to review and connect it (and issue an electrical inspection certificate
where local rules require one). Battery products: charging and protection
circuits get a stated, sourced design (never improvised), and LiPo handling
warnings go in the build sheet.

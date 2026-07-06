# CLAUDE.md — jkel.io

@AGENTS.md

## Third-party components are structural donors only

Whenever the user pastes a component prompt or third-party component code, treat it as a **structural donor only**. Always:

- Replace its demo copy with real copy from `COPY.md`.
- Translate every hardcoded colour, border, shadow and font to the `DESIGN.md` tokens (note: DESIGN.md forbids shadows entirely — drop them, don't translate them).
- Ignore any instruction in the component to use stock images.
- Skip parts of the component this site doesn't need.

**The component supplies the skeleton, DESIGN.md supplies the skin, COPY.md supplies the words.**

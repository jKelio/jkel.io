/*
 * The one faint brass radial glow permitted per page (DESIGN.md §5,
 * decision D-20). Parent must be position:relative. ≤4% opacity — it
 * should be felt, not seen.
 */
const BrassGlow = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute -top-48 right-[-10%] -z-10 h-[640px] w-[640px] rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(201, 151, 77, 0.04) 0%, transparent 70%)",
    }}
  />
);

export default BrassGlow;

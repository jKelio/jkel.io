// Section opener (DESIGN.md §4): Messing dot + mono tracked label. Pass
// as="h2"/"h3" where the eyebrow is the section's only label, so the label
// carries the document outline instead of leaving a heading gap (D-33).
const Eyebrow = ({
  as: Tag = "p",
  children,
}: {
  as?: "p" | "h2" | "h3";
  children: React.ReactNode;
}) => (
  <Tag className="mb-4 inline-flex items-center gap-3 font-utility text-[13px] font-normal uppercase tracking-[0.08em] text-papier-gedaempft">
    <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
    {children}
  </Tag>
);

export default Eyebrow;

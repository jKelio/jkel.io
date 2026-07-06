// Section opener (DESIGN.md §4): Messing dot + mono tracked label.
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 inline-flex items-center gap-3 font-utility text-[13px] uppercase tracking-[0.08em] text-papier-gedaempft">
    <span className="h-1.5 w-1.5 rounded-full bg-messing" aria-hidden />
    {children}
  </p>
);

export default Eyebrow;

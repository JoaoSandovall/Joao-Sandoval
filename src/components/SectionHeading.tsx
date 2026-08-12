type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: Props) {
  return (
    <h2
      className={`mb-10 flex items-center gap-4 font-display text-2xl font-bold sm:mb-12 sm:text-3xl ${className ?? ""}`}
    >
      {children}
      <span className="section-rule" />
    </h2>
  );
}

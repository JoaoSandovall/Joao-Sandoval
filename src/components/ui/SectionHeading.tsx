type Props = {
  number?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ number, children, className }: Props) {
  return (
    <h2
      className={`mb-10 flex items-center gap-4 font-display text-2xl font-bold sm:mb-12 sm:text-3xl ${className ?? ""}`}
    >
      <span className="flex items-baseline gap-2 sm:gap-3">
        {number && (
          <span className="font-mono text-lg font-medium text-muted-foreground sm:text-xl">
            {number} <span className="opacity-40">/</span>
          </span>
        )}
        <span>{children}</span>
      </span>
      <span className="section-rule" />
    </h2>
  );
}
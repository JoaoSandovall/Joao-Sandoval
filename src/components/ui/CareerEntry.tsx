type Props = {
  company: string;
  period: string;
  role: string;
  description: string;
  bordered?: boolean;
};

export default function CareerEntry({ company, period, role, description, bordered = true }: Props) {
  return (
    <article
      className={`grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-6 ${bordered ? "border-b border-border" : ""}`}
    >
      <div className="flex flex-row items-baseline gap-3 md:flex-col md:items-start md:gap-1">
        <span className="font-bold text-primary">{company}</span>
        <span className="label">{period}</span>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold sm:text-xl">{role}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

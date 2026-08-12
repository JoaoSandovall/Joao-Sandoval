import { stack } from "@/content";

export default function StackBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground md:justify-between">
          <span className="w-full text-center text-xs font-bold uppercase tracking-widest text-muted-foreground md:w-auto md:text-left">
            Stack principal
          </span>
          {stack.map((item) => (
            <span key={item} className="text-sm font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
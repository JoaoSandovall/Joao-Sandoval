import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/content";

export default function ServicesSection() {
  return (
    <div className="border-t border-border bg-card/30">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>O que eu faço</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="panel h-full p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold sm:text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
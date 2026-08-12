import { ContactForm } from "@/components/ui/ContactForm";
import { profile } from "@/content";

function ContactLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 text-sm transition-colors hover:text-primary sm:text-base"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary sm:size-10">
        {label}
      </span>
      {children}
    </a>
  );
}

export default function ContactSection() {
  return (
    <div className="border-t border-border">
      <section id="contato" className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold sm:mb-6 sm:text-3xl">
              Vamos construir o próximo sistema juntos?
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
              Disponível para projetos freelance, consultoria técnica e desenvolvimento de MVPs.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <ContactLink href={`mailto:${profile.email}`} label="@">
                {profile.email}
              </ContactLink>
              <ContactLink href={profile.linkedin} label="in" external>
                linkedin.com/in/joãosandoval
              </ContactLink>
              <ContactLink href={profile.github} label="gh" external>
                github.com/JoaoSandovall
              </ContactLink>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
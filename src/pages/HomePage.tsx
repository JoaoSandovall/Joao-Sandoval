import { ContactForm } from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { useTyped } from "@/hooks/useTyped";
import { profile, stack, projects, experience, freelancer, education } from "@/content";
import type { Page } from "@/types/navigation";

const ROLE_PHRASES = [
  "Desenvolvedor Full Stack",
  "Arquiteto de APIs REST",
  "Builder de MVPs",
  "FastAPI · React 19 · Docker",
];

type Props = {
  onNavigate: (page: Page | string) => void;
};

export default function HomePage({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onNavigate={onNavigate} />
      <StackBar />
      <Sobre />
      <Experience onNavigate={onNavigate} />
      <Formation />
      <Projects onNavigate={onNavigate} />
      <Contact />
    </div>
  );
}

function Hero({ onNavigate }: Props) {
  const typedRole = useTyped(ROLE_PHRASES);

  return (
    <header className="relative overflow-hidden">
      <div className="glow-top pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          <span className="label mb-4 block text-primary">{profile.location}</span>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            João Pedro <br />
            <span className="text-muted-foreground">Sandoval Veras.</span>
          </h1>
          <p className="mb-6 font-display text-xl font-bold text-primary sm:text-2xl">
            {typedRole}<span className="animate-pulse">|</span>
          </p>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg">
            Focado em sistemas de alta performance com{" "}
            <span className="text-foreground">FastAPI, React 19 e Docker</span>. Transformo
            processos manuais em APIs escaláveis e interfaces fluidas.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#contato" className="btn-primary">Vamos conversar</a>
            <a href="#projetos" className="btn-outline">Ver projetos</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function StackBar() {
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

function Sobre() {
  const highlights = [
    { value: "9,0", label: "Média na graduação" },
    { value: "2+", label: "Anos de experiência" },
    { value: "4", label: "Projetos entregues" },
  ];

  return (
    <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading>Sobre</SectionHeading>
      <div className="grid gap-10 md:grid-cols-[1fr_260px] md:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Sou desenvolvedor full-stack baseado em{" "}
            <span className="font-semibold text-foreground">Brasília</span>, focado na
            construção de sistemas de backend robustos e interfaces React modernas. Tenho
            experiência prática indo de APIs de produção no setor público até SPAs entregues
            para clientes reais como freelancer.
          </p>
          <p>
            Comecei minha trajetória em redes na{" "}
            <span className="font-semibold text-foreground">Claro</span>, evoluí para
            automação de processos com FastAPI e IA no{" "}
            <span className="font-semibold text-foreground">MIDR</span> e hoje desenvolvo
            projetos freelance do levantamento de requisitos até o deploy em produção.
          </p>
          <p>
            Formado em Análise e Desenvolvimento de Sistemas pela{" "}
            <span className="font-semibold text-foreground">UCB</span> com média 9,0,
            acredito que código limpo, arquitetura bem pensada e entrega real fazem a
            diferença.
          </p>
        </div>
        <div className="flex flex-row gap-6 md:flex-col md:gap-8">
          {highlights.map((h) => (
            <Reveal key={h.label}>
              <div className="panel flex flex-1 flex-col items-center justify-center p-5 text-center md:items-start md:text-left">
                <span className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  {h.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{h.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ onNavigate }: Props) {
  const freelanceProjects = projects.filter((p) =>
    freelancer.projectSlugs.includes(p.slug)
  );

  return (
    <div className="border-t border-border">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Experiência</SectionHeading>
        <div className="divide-y divide-border">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 80}>
              <article className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="flex flex-row items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
                  <span className="font-bold text-primary">{job.company}</span>
                  <span className="label">{job.period}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">{job.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={experience.length * 80}>
            <article className="grid gap-3 py-8 md:grid-cols-[220px_1fr] md:gap-10">
              <div className="flex flex-row items-baseline gap-3 md:flex-col md:items-start md:gap-1.5">
                <span className="font-bold text-primary">Freelancer — Brasília</span>
                <span className="label">{freelancer.period}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">{freelancer.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {freelancer.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {freelanceProjects.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => onNavigate({ id: "project", slug: p.slug })}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:border-primary"
                    >
                      {p.name} →
                    </button>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Formation() {
  return (
    <div className="border-t border-border bg-card/30">
      <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Formação</SectionHeading>
        <Reveal>
          <div className="panel p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{education.course}</h3>
                <p className="mt-1 font-bold text-primary">{education.institution}</p>
              </div>
              <div className="shrink-0 sm:text-right">
                <span className="label block">{education.period}</span>
                <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  {education.status}
                </span>
              </div>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {education.description}
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="label mb-4">Disciplinas principais</p>
                <ul className="space-y-2.5">
                  {education.disciplines.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                      <span className="bullet" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label mb-4">Tecnologias aplicadas</p>
                <div className="flex flex-wrap gap-2">
                  {education.stack.map((t) => (
                    <span key={t} className="tag-outline">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Projects({ onNavigate }: Props) {
  return (
    <div className="border-t border-border">
      <section id="projetos" className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Projetos em destaque</SectionHeading>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="flex">
              <ProjectCard project={project} onNavigate={onNavigate} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function Contact() {
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

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Sobre() {
  const highlights = [
    { value: "2+", label: "Anos de experiência" },
    { value: "4", label: "Projetos entregues" },
    { value: "9,0", label: "Média na graduação" },
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
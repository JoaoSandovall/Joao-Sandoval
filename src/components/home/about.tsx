import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Sobre() {
  return (
    <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading>Sobre</SectionHeading>
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        
        {/* COLUNA DE TEXTO */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Sou desenvolvedor Full-Stack focado em construir <span className="text-foreground">aplicações web previsíveis e de alta performance</span>. No front-end, crio Single Page Applications (SPAs) rápidas e responsivas com React e TypeScript, garantindo tipagem estrita no client-side e interfaces estáveis.
          </p>
          <p>
            No back-end, construo <span className="text-foreground">APIs REST assíncronas em Python</span> para lidar com alta concorrência. Minha atuação técnica envolve a modelagem de bancos relacionais, extração de dados não estruturados (integrada com IA) e validação rigorosa de schemas via Pydantic. Para garantir estabilidade em produção, gerencio a infraestrutura com <span className="text-foreground">Docker</span> e o controle de versão estrutural do banco via <span className="text-foreground">Alembic</span>.
          </p>
          <p>
            Mais do que escrever código, desenvolvo software para resolver gargalos reais. Durante minha atuação no MIDR, estruturei uma API que automatizou a auditoria de documentos oficiais, <span className="text-foreground">reduzindo o tempo de análise de 25 minutos para menos de 5 segundos</span>. É essa mesma engenharia focada em resultados que aplico nos projetos em que atuo hoje.
          </p>
        </div>

        {/* COLUNA VISUAL - PILARES TÉCNICOS */}
        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="panel flex flex-col justify-center p-6">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Backend
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Python, FastAPI, Flask, PostgreSQL, MySQL, Pydantic e Alembic.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="panel flex flex-col justify-center p-6">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Frontend
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                React, TypeScript, Tailwind CSS, Shadcn UI e Vite.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="panel flex flex-col justify-center p-6">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Infra & Dados
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Docker, Serverless, RegEx, APIs de IA e Power BI.
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
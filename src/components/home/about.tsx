import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Sobre() {
  return (
    <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading>Sobre</SectionHeading>
      
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
        
        {/* COLUNA DE TEXTO */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Meu objetivo na área de tecnologia se resume a duas coisas: <span className="text-foreground">estudar e gerar resultados reais.</span>
          </p>
          <p>
            Desenvolvo aplicações web usando <span className="text-foreground">Python, Docker, React e TypeScript</span>. Sem atalhos e sem complicar o que deve ser simples. Construo sistemas organizados para que o cliente tenha uma ferramenta útil e a equipe tenha um código fácil de escalar.
          </p>
          <p>
            No fim do dia, acredito que o melhor código é aquele que cumpre o seu papel sem dor de cabeça. Busco sempre evoluir tecnicamente para construir softwares que não apenas rodem bem, mas que realmente facilitem a vida de quem os utiliza.
          </p>
        </div>

        {/* COLUNA VISUAL - PILARES */}
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
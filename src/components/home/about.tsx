import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function Sobre() {
  return (
    <section className="section-spacing mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading number="01">Sobre</SectionHeading>
      
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
        
        {/* COLUNA DE TEXTO */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Meu objetivo na área de tecnologia se resume a duas coisas: <span className="text-foreground">estudar continuamente e gerar resultados reais.</span>
          </p>
          <p>
            Desenvolvo aplicações web do zero usando <span className="text-foreground">Python, Docker, React e TypeScript</span>. Sem atalhos e sem complicar o que deve ser simples. Construo sistemas organizados para que o cliente tenha uma ferramenta útil e a equipe técnica tenha um código fácil de escalar.
          </p>
          <p>
            Gosto de medir meu trabalho pelo tempo que ele economiza. Um bom exemplo foi meu último projeto, onde criei um sistema com IA que <span className="text-foreground">reduziu um gargalo de <AnimatedNumber value={25} /> minutos para menos de <AnimatedNumber value={5} /> segundos</span>.
          </p>
        </div>

        {/* COLUNA VISUAL - PILARES TÉCNICOS */}
        <div className="flex flex-col gap-4">
          <Reveal slideFrom="right">
            <div className="panel flex flex-col justify-center p-6">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Backend
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Python, FastAPI, Flask, PostgreSQL, MySQL, Pydantic e Alembic.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={100} slideFrom="right">
            <div className="panel flex flex-col justify-center p-6">
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Frontend
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                React, TypeScript, Tailwind CSS, Shadcn UI e Vite.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200} slideFrom="right">
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
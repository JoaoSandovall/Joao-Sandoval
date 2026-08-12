export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
  freelanceProjects?: string[];
};

export const experience: Job[] = [
  {
    role: "Estagiário de Tecnologia da Informação",
    company: "MIDR — Brasília",
    period: "Abr 2025 — Jun 2026",
    description:
      "API assíncrona em FastAPI para auditoria de documentos com RegEx, Pydantic e IA, além da reestruturação do Business Intelligence do setor em Power BI e DAX.",
  },
  {
    role: "Jovem Aprendiz Técnico de Rede",
    company: "Claro — Brasília",
    period: "Out 2024 — Abr 2025",
    description:
      "Suporte técnico no monitoramento de redes, cabos e fibras, com organização de dados, análise de rotas e identificação de danos físicos.",
  },
];

export const freelancer = {
  role: "Desenvolvedor Front-end Freelancer",
  period: "Mai 2026 — Atual",
  description:
    "Atuo de forma independente desenvolvendo SPAs e landing pages para clientes reais. Cada projeto vai do levantamento de requisitos até o deploy em produção, usando React 19, TypeScript, Tailwind CSS, Shadcn UI, Radix e Vite. Abaixo, os dois projetos entregues.",
  projectSlugs: ["ipa-psicologia", "la-da-roca"],
};

export const education = {
  course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "Universidade Católica de Brasília",
  period: "Mar 2024 — Jun 2026",
  status: "Concluído • Média 9,0",
  description:
    "Formação técnica com foco prático no ciclo completo de desenvolvimento. A matriz abrange desde a arquitetura de baixo nível e algoritmos, até a implementação de aplicações web/mobile, modelagem de banco de dados, esteiras DevOps e integrações com Inteligência Artificial e IoT.",
  disciplines: [
    "Arquitetura de Computadores e Sistemas Operacionais",
    "Engenharia de Software, Requisitos e Métodos Ágeis",
    "Algoritmos, Programação Estruturada e POO",
    "Desenvolvimento Multiplataforma (Web e App)",
    "Banco de Dados e Redes de Computadores",
    "DevOps, Hiperautomatização e IoT",
    "Inteligência Artificial, Robótica e Machine Learning",
    "Gestão de TI, IHC e Projetos de Extensão"
  ],
  stack: [
  "C#", "Java", "PHP", "MySQL", "SQL"
  ],
};
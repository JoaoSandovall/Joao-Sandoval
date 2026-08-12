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
    role: "Jovem Aprendiz — Técnico de Rede",
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
  period: "Mar 2024 — Mai 2026",
  status: "Concluído · Média 9,0",
  description:
    "Graduação focada na construção de sistemas web completos — do banco de dados à interface. O curso abrangeu desde fundamentos de engenharia de software até práticas modernas de DevOps e análise de dados.",
  disciplines: [
    "Engenharia de Software & Metodologias Ágeis",
    "Programação Orientada a Objetos",
    "Banco de Dados Relacional & SQL",
    "Desenvolvimento Web Full-Stack",
    "DevOps, Contêineres & Infraestrutura",
    "Redes e Sistemas Operacionais",
    "Análise e Modelagem de Sistemas",
    "Estruturas de Dados & Algoritmos",
  ],
  stack: ["Python", "React", "TypeScript", "PostgreSQL", "Docker", "Git", "Linux", "Power BI"],
};

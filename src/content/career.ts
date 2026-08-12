export type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
  projectSlugs?: string[];
};

export const experience: Job[] = [
  {
    role: "Estagiário de Tecnologia da Informação",
    company: "MIDR — Brasília",
    period: "Abr 2025 — Jun 2026",
    description:
      "Desenvolvimento do projeto de Verificação de Minuta, uma API assíncrona em FastAPI para auditoria automatizada de documentos oficiais usando RegEx, validação com Pydantic e IA. Além disso, atuei na reestruturação do Business Intelligence do setor utilizando Power BI e DAX.",
    projectSlugs: ["auditor-de-minutas"],
  },
  {
    role: "Jovem Aprendiz Técnico de Rede",
    company: "Claro — Brasília",
    period: "Out 2024 — Abr 2025",
    description:
      "Suporte Administrativo focado no monitoramento de infraestrutura de redes, cabos e fibras ópticas. Atuei na organização de dados, análise contínua de rotas e identificação de danos físicos para manter a estabilidade da operação.",
  },
];

export const freelancer = {
  role: "Desenvolvedor Front-end Freelancer",
  period: "Mai 2026 — Atual",
  description:
    "Atuo de forma independente no ciclo completo de desenvolvimento de SPAs e landing pages para clientes reais, indo do levantamento de requisitos ao deploy em produção. Utilizo React 19, TypeScript, Tailwind CSS, Shadcn UI, Radix e Vite para entregar interfaces rápidas e acessíveis.",
  projectSlugs: ["ipa-psicologia", "la-da-roca"],
};

export const education = {
  course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "Universidade Católica de Brasília",
  period: "Mar 2024 — Jun 2026",
  status: "Concluído • Média 9,0",
  description:
    "Graduação estruturada na base da Engenharia de Software e Administração de Bancos de Dados Relacionais. A prática acadêmica focou fortemente em Programação Orientada a Objetos (POO), construção de algoritmos e modelagem de dados.",
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
  stack: ["Java", "C", "SQL", "MySQL"],
};
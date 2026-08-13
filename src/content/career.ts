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
  course: "Graduação em Análise e Desenvolvimento de Sistemas",
  institution: "Universidade Católica de Brasília",
  period: "Mar 2024 — Jun 2026",
  status: "Concluído • Média 9,0",
  description:
    "Formação focada no ciclo de vida do software. A matriz começou na base com sistemas operacionais, redes e programação estruturada, evoluindo para a criação prática de interfaces web/mobile e modelagem de banco de dados. Também passei por engenharia de requisitos, DevOps e IA.",
  stack: ["Java", "C", "PHP", "SQL", "MySQL"],
};
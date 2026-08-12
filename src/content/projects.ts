export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  highlight?: string;
  tags: string[];
  context: string;
  challenge: string[];
  solution: string[];
  outcome: string[];
  website?: string;
  repository?: string;
  image?: string;
};

export const projects: Project[] = [
  // --- FREELANCES ---
  {
    slug: "ipa-psicologia",
    name: "IPA — Instituto de Psicologia Aplicada",
    category: "Freelance",
    year: "2026",
    summary:
      "SPA institucional desenvolvida do zero em React + TypeScript, com componentes acessíveis e build de produção otimizado.",
    image: "/captura-ipa.png",
    tags: ["React", "TypeScript", "Shadcn UI", "Tailwind", "Vite"],
    context: "O instituto precisava de presença digital própria, rápida e fácil de atualizar.",
    challenge: [
      "Entregar uma interface leve e responsiva para um público não técnico.",
      "Garantir acessibilidade e performance num ambiente de produção real.",
    ],
    solution: [
      "Arquitetura de componentes funcionais com Shadcn UI e Radix.",
      "Tipagem estrita no client-side com TypeScript.",
      "Estilização responsiva com Tailwind CSS e build otimizado via Vite.",
    ],
    outcome: [
      "Site institucional publicado, responsivo e simples de manter.",
      "Componentes acessíveis e performance de build otimizada para produção.",
    ],
    website: "https://ipapsicologia.com.br/",
    repository: "https://github.com/JoaoSandovall/IPA_Psicologia",
  },
  {
    slug: "la-da-roca",
    name: "Lá da Roça",
    category: "Freelance",
    year: "2026",
    summary:
      "Landing page para marca de produtos artesanais, com identidade visual forte e foco em conversão.",
    image: "/captura-ladaroca.png",
    tags: ["React", "TypeScript", "Shadcn UI", "Tailwind", "Vite"],
    context:
      "A marca precisava de uma presença digital que comunicasse autenticidade e qualidade artesanal ao mesmo tempo que facilitava o contato com clientes.",
    challenge: [
      "Traduzir a identidade visual da marca para uma interface digital fiel.",
      "Garantir experiência fluida em dispositivos móveis, principal canal de acesso do público.",
    ],
    solution: [
      "Landing page em React com estrutura de seções focada em conversão.",
      "Componentização com Shadcn UI e Radix para consistência visual.",
      "Responsividade mobile-first com Tailwind CSS.",
    ],
    outcome: [
      "Página publicada com identidade visual coesa e experiência responsiva.",
      "Ponto de contato digital ativo para a marca artesanal.",
    ],
    website: "https://www.ladarocadf.com.br/",
    repository: "https://github.com/JoaoSandovall/Ladaroca",
  },

  // --- ESTUDOS E SISTEMAS ---
  {
    slug: "auditor-de-minutas",
    name: "Auditor de Minutas com IA",
    category: "IA & Automação",
    year: "2026",
    summary:
      "Auditoria automatizada de minutas e documentos oficiais no MIDR, combinando extração por RegEx, validação com Pydantic e análise semântica por IA.",
    highlight: "de 25 minutos para menos de 5 segundos",
    image: "/captura-revisao.png",
    tags: ["FastAPI", "Pydantic", "RegEx", "IA"],
    context:
      "A conferência de minutas era feita manualmente pela equipe, documento por documento, com alto risco de inconsistência entre versões.",
    challenge: [
      "Ler documentos longos e não estruturados sem um padrão único de formatação.",
      "Garantir que os campos extraídos fossem confiáveis o suficiente para uso oficial.",
      "Entregar o resultado em uma interface simples para quem não é da área técnica.",
    ],
    solution: [
      "API assíncrona em Python/FastAPI para processar documentos em paralelo.",
      "Rotinas de extração baseadas em Expressões Regulares e normalização de texto.",
      "Validação estrita dos dados extraídos com Pydantic antes de qualquer análise.",
      "Integração com IA para análise semântica dos trechos ambíguos.",
      "Interface web estática integrada à API para consulta dos resultados.",
    ],
    outcome: [
      "Tempo médio de processamento reduzido de 25 minutos para menos de 5 segundos.",
      "Padronização da auditoria e rastreabilidade das inconsistências encontradas.",
    ],
    website: "https://verificacao-minuta.vercel.app/",
    repository: "https://github.com/JoaoSandovall/Verificacao_minuta",
  },
  {
    slug: "gestao-de-entidades",
    name: "Gestão de Entidades (Colegiados)",
    category: "Aplicação institucional",
    year: "2026",
    summary:
      "Aplicação Full-Stack em FastAPI e React para o gerenciamento centralizado de dados institucionais, totalmente conteinerizada com Docker.",
    tags: ["FastAPI", "React", "TypeScript", "SQLite", "Docker", "Shadcn UI"],
    context:
      "Os dados de entidades e membros viviam em planilhas paralelas, gerando duplicidade e informações conflitantes.",
    challenge: [
      "Substituir o controle manual por um sistema integrado e de fácil uso.",
      "Impedir cadastros duplicados e centralizar as informações de forma relacional.",
    ],
    solution: [
      "Backend em FastAPI integrado a um banco de dados SQLite para operações transacionais rápidas.",
      "Frontend construído em React com TypeScript, utilizando componentes modulares do Shadcn UI.",
      "Infraestrutura padronizada com Docker e Docker Compose para facilitar o deploy e a manutenção.",
    ],
    outcome: [
      "Base única e consistente para os dados institucionais, acessível via interface limpa e responsiva.",
      "Ambiente de desenvolvimento e produção isolado e padronizado via contêineres.",
    ],
    repository: "https://github.com/JoaoSandovall/Banco_colegiados",
  },
  {
    slug: "agregador-de-links",
    name: "Agregador de Links Multiusuário",
    category: "Produto SaaS",
    year: "2025",
    summary:
      "SaaS em Flask para criação e gestão de perfis de links, com autenticação, proteção de rotas e migrações estruturais.",
    tags: ["Flask", "PostgreSQL", "SQLAlchemy", "Alembic"],
    context:
      "Projeto próprio para praticar arquitetura multiusuário do zero, do cadastro à publicação do perfil.",
    challenge: [
      "Isolar os dados de cada usuário com segurança.",
      "Manter o schema evoluindo sem downtime.",
    ],
    solution: [
      "Rotinas de autenticação e proteção de rotas.",
      "Mapeamento objeto-relacional com SQLAlchemy.",
      "Migrações estruturais versionadas via Alembic.",
    ],
    outcome: ["Fluxo completo de cadastro, login e gestão de perfil em produção."],
    repository: "https://github.com/JoaoSandovall",
  },
];
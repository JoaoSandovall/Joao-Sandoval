export type Note = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  paragraphs: string[];
};

export const notes: Note[] = [
  {
    slug: "pydantic-v2-validacao",
    title: "Validações complexas com Pydantic v2 sem perder performance",
    category: "Backend",
    date: "Julho, 2026",
    summary:
      "Como estruturar validators, tipos customizados e modelos aninhados sem transformar a camada de entrada em gargalo.",
    paragraphs: [
      "Quando a API recebe dados extraídos de documentos, a validação deixa de ser um detalhe e vira a principal linha de defesa do sistema. Em vez de espalhar checagens pelo handler, concentro tudo em modelos Pydantic bem tipados.",
      "Tipos customizados resolvem a maior parte dos casos: um CPF, uma data em formato brasileiro ou um número de processo viram tipos reutilizáveis, com mensagem de erro clara e um único ponto de manutenção.",
      "Para modelos aninhados grandes, vale medir antes de otimizar. Na prática, o custo real quase sempre está em I/O e não na validação — mas validators que fazem consultas externas devem sair do modelo e ir para a camada de serviço.",
    ],
  },
  {
    slug: "alembic-docker",
    title: "Estratégias de migração com Alembic em ambientes Docker",
    category: "DevOps",
    date: "Junho, 2026",
    summary:
      "Um fluxo previsível para aplicar migrações em containers sem travar deploys nem perder histórico.",
    paragraphs: [
      "Rodar migração no start do container parece prático até o dia em que duas réplicas sobem juntas. Prefiro um passo explícito de migração antes do deploy da aplicação.",
      "Revisar o autogenerate é obrigatório: o Alembic acerta o óbvio, mas renomear coluna, mudar tipo e criar índice concorrente pedem ajuste manual.",
      "Migrações devem ser reversíveis e pequenas. Quando uma mudança não pode ser desfeita, ela merece uma janela própria e um plano de rollback escrito antes.",
    ],
  },
  {
    slug: "regex-e-ia",
    title: "RegEx e IA são complementares na extração de documentos",
    category: "IA",
    date: "Maio, 2026",
    summary: "Nem tudo precisa de modelo de linguagem — e nem tudo cabe em uma expressão regular.",
    paragraphs: [
      "Campos com formato estável são território de RegEx: rápido, determinístico e barato. Jogar isso em um modelo de linguagem é pagar caro por uma resposta menos previsível.",
      "A IA entra onde o texto é ambíguo: interpretar intenção de uma cláusula, comparar redações ou classificar um trecho sem padrão fixo.",
      "O ganho real vem da ordem certa: extrair o que é estruturado, validar com tipos estritos e só então mandar o resto para análise semântica.",
    ],
  },
];

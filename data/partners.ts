export type Partner = {
  id: string;
  logo: string;
  name: string;
  category: string[];
  special: boolean;
  description: string;
  benefits: string[];
  tags: string[];
  segment: "parceiros" | "solucoes" | "both";
  url: string;
};

export const CATEGORIES = [
  "Todos",
  "Tecnologia",
  "Saúde",
  "Logística",
  "Financeiro",
  "RH",
  "Marketing",
  "Matriz",
  "Loja",
];

export const partners: Partner[] = [
  {
    id: "1",
    logo: "/carros.png",
    name: "Gestão Estacionamento",
    category: ["RH","Matriz"],
    special: false,
    description:
      "Cadastro de veículos, controla entradas e saídas e a administração das vagas da empresa.",
    benefits: [
      "Mais controle e organização das vagas",
      "Segurança operacional",
      "Erros de registro",
    ],
    tags: ["Claude Code", "Codex", "Next.js", "SQLite","Docker","Git","Homus sapiens"],
    segment: "",
    url: "http://localhost:3002",
  },
  {
    id: "2",
    logo: "/uniforme.png",
    name: "Gestão de Uniforme",
    category: ["RH","Loja","Matriz"],
    special: false,
    description:
      "Solicitação de uniformes de loja, controle de estoque e distribuição.",
    benefits: [
      "Melhor experiência para o colaborador",
      "Gestão centralizada das regras de concessão",
      "Mais agilidade para RH e colaboradores",
    ],
    tags: ["Claude Code", "Next.js", "PostgreSQL", "Docker","Git","Homus sapiens"],
    segment: "solucoes",
    url: "http://localhost:3001",
  },
  {
    id: "3",
    logo: "/preco-etiqueta.png",
    name: "Preço na Loja",
    category: ["Tecnologia","Loja"],
    special: true,
    description:
      "Verifique o preço de um produto em uma das nossas 150 lojas.",
    benefits: [
      "Valide o preço no pdv da loja",
      "Redução de divergências e erros",
      "Maior confiabilidade operacional",
    ],
    tags: ["preço", "produto", "pdv", "loja", "consulta"],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "4",
    logo: "CB",
    name: "Lorem ipsum",
    category: ["Financeiro"],
    special: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    benefits: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    tags: ["banco", "crédito", "financeiro", "conta PJ", "tesouraria"],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "5",
    logo: "TL",
    name: "Lorem ipsum",
    category: ["RH"],
    special: true,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    benefits: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    tags: ["recrutamento", "talentos", "seleção", "pessoas", "contratação"],
    segment: "solucoes",
    url: "#",
  },
  {
    id: "6",
    logo: "BM",
    name: "Lorem ipsum dolor",
    category: ["Marketing"],
    special: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    benefits: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    tags: ["marketing", "redes sociais", "conteúdo", "mídia", "comunicação"],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "7",
    logo: "DS",
    name: "DataSync",
    category: ["Tecnologia"],
    special: true,
    description:
      "Infraestrutura de dados, analytics avançado e automação de processos com integração nativa aos sistemas legados.",
    benefits: [
      "Dashboard em tempo real",
      "Automação de relatórios",
      "Integração com ERPs líderes",
    ],
    tags: ["dados", "analytics", "BI", "dashboard", "automação"],
    segment: "solucoes",
    url: "#",
  },
  {
    id: "8",
    logo: "VB",
    name: "VidaBem",
    category: ["Saúde"],
    special: false,
    description:
      "Programa de bem-estar corporativo com suporte psicológico, atividade física e programas de qualidade de vida.",
    benefits: [
      "Suporte psicológico online",
      "Parcerias com academias",
      "App de hábitos saudáveis",
    ],
    tags: ["bem-estar", "saúde mental", "academia", "qualidade de vida"],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "9",
    logo: "PR",
    name: "ProcureRight",
    category: ["Logística"],
    special: false,
    description:
      "Plataforma de procurement inteligente com catálogo centralizado, cotações automatizadas e gestão de fornecedores.",
    benefits: [
      "Cotações automáticas",
      "Painel de fornecedores",
      "Relatório de saving",
    ],
    tags: ["compras", "fornecedores", "cotação", "procurement", "saving"],
    segment: "solucoes",
    url: "#",
  },
];

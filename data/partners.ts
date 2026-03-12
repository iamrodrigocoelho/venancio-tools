export type Partner = {
  id: string;
  logo: string;
  name: string;
  category: string[];
  special: boolean;
  description: string;
  benefits: string[];
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
    segment: "solucoes",
    url: "http://localhost:3001",
  },
  {
    id: "3",
    logo: "/preco-etiqueta.png",
    name: "Preço na Loja",
    category: ["Tecnologia","Loja"],
    special: false,
    description:
      "Verifique o preço de um produto em uma das nossas 150 lojas.",
    benefits: [
      "Valide o preço no pdv da loja",
      "Redução de divergências e erros",
      "Maior confiabilidade operacional",
    ],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "4",
    logo: "CB",
    name: "CapitalBank",
    category: ["Financeiro"],
    special: true,
    description:
      "Serviços financeiros corporativos: crédito empresarial, gestão de tesouraria e conta digital PJ sem tarifas.",
    benefits: [
      "Crédito com taxa preferencial",
      "Conta PJ sem tarifa",
      "Gestão de fluxo de caixa integrada",
    ],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "5",
    logo: "TL",
    name: "TalentLink",
    category: ["RH"],
    special: false,
    description:
      "Plataforma de recrutamento, gestão de talentos e desenvolvimento de competências com inteligência artificial.",
    benefits: [
      "Banco de talentos qualificados",
      "Avaliação por competências",
      "Relatórios de desempenho",
    ],
    segment: "solucoes",
    url: "#",
  },
  {
    id: "6",
    logo: "BM",
    name: "BrandMax",
    category: ["Marketing"],
    special: false,
    description:
      "Agência especializada em comunicação corporativa, mídia digital e gestão de marca para o varejo farmacêutico.",
    benefits: [
      "Estratégia de conteúdo dedicada",
      "Gestão de redes sociais",
      "Relatórios mensais de performance",
    ],
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
    segment: "solucoes",
    url: "#",
  },
];

export type Partner = {
  id: string;
  logo: string;
  name: string;
  category: string;
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
];

export const partners: Partner[] = [
  {
    id: "1",
    logo: "ST",
    name: "SoftTech Solutions",
    category: "Tecnologia",
    special: true,
    description:
      "Plataforma integrada de gestão empresarial com módulos de ERP, CRM e BI desenvolvidos para redes de varejo.",
    benefits: [
      "Licença corporativa com desconto exclusivo",
      "Onboarding dedicado",
      "Suporte 24/7 prioritário",
    ],
    segment: "solucoes",
    url: "http://localhost:3000",
  },
  {
    id: "2",
    logo: "MV",
    name: "MedVida Saúde",
    category: "Saúde",
    special: true,
    description:
      "Plano de saúde corporativo com cobertura ampliada, telemedicina e rede credenciada nacional para colaboradores.",
    benefits: [
      "Cobertura nacional",
      "Telemedicina ilimitada",
      "Desconto progressivo por adesão",
    ],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "3",
    logo: "FL",
    name: "FastLog",
    category: "Logística",
    special: false,
    description:
      "Soluções de última milha e distribuição B2B com rastreamento em tempo real e integração via API.",
    benefits: [
      "Entrega expressa D+1",
      "API de rastreamento",
      "Centro de distribuição próprio",
    ],
    segment: "parceiros",
    url: "#",
  },
  {
    id: "4",
    logo: "CB",
    name: "CapitalBank",
    category: "Financeiro",
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
    category: "RH",
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
    category: "Marketing",
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
    category: "Tecnologia",
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
    category: "Saúde",
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
    category: "Logística",
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

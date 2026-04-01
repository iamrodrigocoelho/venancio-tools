"use client";

import { useState } from "react";

const faqs = [
  {
    pergunta: "Como faço para acessar os benefícios de um parceiro?",
    resposta:
      "Acesse a página do parceiro no portal, clique no card e siga as instruções disponíveis. Em caso de dúvidas, entre em contato pelo formulário acima.",
  },
  {
    pergunta: "Preciso de e-mail para entrar em contato?",
    resposta:
      'Não. Ao preencher o formulário, marque a opção "Não possuo e-mail" e o campo será preenchido automaticamente. Nossa equipe retornará por outro meio de contato.',
  },
  {
    pergunta: "Quem pode acessar o Venancio Tools?",
    resposta:
      "O portal é exclusivo para colaboradores e parceiros do Grupo Venancio.",
  },
  {
    pergunta: "Como solicito a inclusão de um novo parceiro?",
    resposta:
      'Use o formulário acima, selecione o assunto "Sugestão" e descreva o parceiro que gostaria de indicar. Nossa equipe irá avaliar.',
  },
  {
    pergunta: "Em quanto tempo recebo retorno do meu contato?",
    resposta:
      "Nossa equipe responde em até 2 dias úteis. Se você não possui e-mail, informe um ramal ou setor para contato na mensagem.",
  },
  {
    pergunta: "Encontrei um erro no portal. Como reporto?",
    resposta:
      'Use o formulário selecionando o assunto "Problema de acesso" e descreva o que aconteceu. Nossa equipe de TI irá analisar o mais rápido possível.',
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#F5F0E8]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A265] border border-[#C9A265]/40 rounded-full px-4 py-1.5 mb-5">
            FAQ
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#0F1E3C] font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-[#6B7280] text-base max-w-md leading-relaxed">
            Encontre respostas para as dúvidas mais comuns sobre o Venancio Tools.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 ${
                aberto === i
                  ? "border-[#C9A265]/50 shadow-md shadow-[#0F1E3C]/6"
                  : "border-[#E5E0D8] hover:border-[#C9A265]/30"
              }`}
            >
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={aberto === i}
              >
                <span className="text-[#0F1E3C] font-semibold text-sm md:text-base leading-snug">
                  {item.pergunta}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 transition-transform duration-250 ${
                    aberto === i ? "rotate-180 text-[#C9A265]" : "text-[#8A95AA]"
                  }`}
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {aberto === i && (
                <div className="px-6 pb-6">
                  <div className="border-t border-[#F0EAD8] mb-4" />
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

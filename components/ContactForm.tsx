"use client";

import { useState } from "react";

const ASSUNTOS = [
  "Dúvida sobre parceiro",
  "Problema de acesso",
  "Sugestão",
  "Reclamação",
  "Outro",
];

export default function ContactForm() {
  const [semEmail, setSemEmail] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    matricula: "",
    assunto: "",
    email: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a um serviço de envio (ex: Resend, SendGrid, Server Action)
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#0F1E3C] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl text-[#0F1E3C]">Mensagem enviada!</h3>
        <p className="text-[#6B7280] max-w-sm">
          Recebemos seu contato e retornaremos em breve.
        </p>
        <button
          onClick={() => {
            setEnviado(false);
            setForm({ nome: "", matricula: "", assunto: "", email: "", mensagem: "" });
            setSemEmail(false);
          }}
          className="mt-2 text-sm text-[#0F1E3C] underline underline-offset-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="nome"
            className="text-xs font-semibold uppercase tracking-widest text-[#C9A265]"
          >
            Nome completo
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4D9] bg-white text-[#0F1E3C] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F1E3C] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="matricula"
            className="text-xs font-semibold uppercase tracking-widest text-[#C9A265]"
          >
            Matrícula
          </label>
          <input
            id="matricula"
            name="matricula"
            type="text"
            required
            value={form.matricula}
            onChange={handleChange}
            placeholder="Número de matrícula"
            className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4D9] bg-white text-[#0F1E3C] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F1E3C] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="assunto"
          className="text-xs font-semibold uppercase tracking-widest text-[#C9A265]"
        >
          Assunto
        </label>
        <select
          id="assunto"
          name="assunto"
          required
          value={form.assunto}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4D9] bg-white text-[#0F1E3C] text-sm focus:outline-none focus:border-[#0F1E3C] transition-colors"
        >
          <option value="">Selecione um assunto</option>
          {ASSUNTOS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-widest text-[#C9A265]"
          >
            E-mail
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={semEmail}
              onChange={(e) => setSemEmail(e.target.checked)}
              className="accent-[#0F1E3C] w-3.5 h-3.5"
            />
            <span className="text-xs text-[#6B7280]">Não possuo e-mail</span>
          </label>
        </div>
        <input
          id="email"
          name="email"
          type={semEmail ? "text" : "email"}
          required
          disabled={semEmail}
          value={semEmail ? "Colaborador sem e-mail" : form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4D9] bg-white text-[#0F1E3C] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F1E3C] transition-colors disabled:bg-[#F7F6F2] disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="mensagem"
          className="text-xs font-semibold uppercase tracking-widest text-[#C9A265]"
        >
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Descreva sua dúvida ou solicitação"
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-[#E8E4D9] bg-white text-[#0F1E3C] text-sm placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F1E3C] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto self-end inline-flex items-center justify-center gap-2 bg-[#0F1E3C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#1a2f5a] transition-colors duration-200"
      >
        Enviar mensagem
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  );
}

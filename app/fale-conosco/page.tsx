import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Fale Conosco — Venancio Tools",
  description:
    "Entre em contato com a equipe do Venancio Tools. Envie sua dúvida, sugestão ou solicitação.",
};

export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#F5F0E8] pt-10 pb-3 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C9A265] border border-[#C9A265]/40 rounded-full px-4 py-1.5 mb-5">
              Suporte
            </span>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Tem uma dúvida, sugestão ou precisa de ajuda? Nossa equipe está aqui para te atender.
            </p>
          </div>
        </section>

        {/* Formulário */}
        <section className="max-w-3xl mx-auto px-6 pt-5 pb-16">
          <h2 className="font-playfair text-2xl text-[#0F1E3C] mb-8 font-semibold">
            Envie uma mensagem
          </h2>
          <ContactForm />
        </section>

        {/* FAQ */}
        <div className="border-t border-[#E5E0D8]">
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}

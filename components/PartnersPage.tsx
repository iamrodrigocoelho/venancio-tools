"use client";

import { useState, useMemo } from "react";
import { partners, CATEGORIES, type Partner } from "@/data/partners";
import PartnerCard from "@/components/PartnerCard";

export default function PartnersPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = useMemo<Partner[]>(() => {
    const q = search.trim().toLowerCase();
    return partners.filter((p) => {
      const matchCategory =
        activeCategory === "Todos" || p.category.includes(activeCategory);
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.some((c) => c.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 text-center">
          {/* <span className="animate-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A265] border border-[#C9A265]/40 rounded-full px-4 py-1.5 mb-6">
           <span className="w-1.5 h-1.5 rounded-full bg-[#C9A265] animate-pulse" />
            Acesso Exclusivo · Grupo Venancio
          </span>*/}
          <p className="animate-fade-up delay-200 text-[#6B7280] text-lg leading-relaxed">
            Hub de soluções corporativas desenvolvidas com Inteligência Artificial Generativa da Venancio e Hospinova.
          </p>
        </div>
      </section>

      {/* ── Search & Filters ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-3 pb-20">
        {/* Search bar */}
        <div className="flex justify-center mb-6 animate-fade-up delay-300">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-[#8A95AA]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar parceiros, categorias ou soluções..."
              className="w-full border border-[#DDD8CC] rounded-2xl pl-12 pr-5 py-4 text-sm text-[#1A2540] placeholder:text-[#8A95AA] bg-white shadow-sm focus:outline-none focus:border-[#0F1E3C] focus:ring-2 focus:ring-[#0F1E3C]/8 transition-all duration-200"
            />
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex justify-center mb-10 animate-fade-up delay-400">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0F1E3C] text-white shadow-sm"
                    : "bg-white text-[#5A6378] border border-[#DDD8CC] hover:border-[#0F1E3C] hover:text-[#0F1E3C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-[#8A95AA] tracking-wide">
            {filtered.length}{" "}
            {filtered.length === 1 ? "parceiro encontrado" : "parceiros encontrados"}
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#EDE9E0] flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#8A95AA]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <p className="text-[#1A2540] font-semibold text-lg">Nenhum resultado encontrado</p>
            <p className="text-sm text-[#8A95AA] max-w-xs leading-relaxed">
              Tente ajustar os filtros ou o termo de busca para encontrar o que procura.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("Todos");
              }}
              className="mt-2 text-sm text-[#0F1E3C] font-semibold border border-[#0F1E3C] px-5 py-2 rounded-full hover:bg-[#0F1E3C] hover:text-white transition-all duration-200"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </>
  );
}

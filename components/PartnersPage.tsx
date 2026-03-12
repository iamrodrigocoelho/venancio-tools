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
      // Category filter
      const matchCategory =
        activeCategory === "Todos" || p.category.includes(activeCategory);

      // Search filter
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.some((c) => c.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 pb-20">
      {/* Back link */}
      {/* Page title section */}
      <div className="flex flex-col items-center text-center gap-3 mb-6">
        <p className="text-[#6B7280] text-base max-w-xl leading-relaxed">
          Hub de soluções corporativas desenvolvidas com Inteligência Artificial
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-[#6B7280]"
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
            className="w-full border border-[#E8E4D9] rounded-2xl pl-12 pr-5 py-3.5 text-sm text-[#1F2937] placeholder:text-[#6B7280] bg-white shadow-sm focus:outline-none focus-within:border-[#0F1E3C] focus:border-[#0F1E3C] transition-colors duration-150"
          />
        </div>
      </div>
      {/* Filter chips */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0F1E3C] text-white border border-[#0F1E3C]"
                  : "bg-white text-[#6B7280] border border-[#E8E4D9] hover:border-[#0F1E3C] hover:text-[#0F1E3C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-[#6B7280]">
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
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#F0EDE6] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#6B7280]"
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
          <p className="text-[#1F2937] font-medium">Nenhum resultado encontrado</p>
          <p className="text-sm text-[#6B7280] max-w-xs">
            Tente ajustar os filtros ou o termo de busca para encontrar o que procura.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("Todos");
            }}
            className="mt-2 text-sm text-[#0F1E3C] font-medium hover:underline transition-all duration-150"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </section>
  );
}

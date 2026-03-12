import Link from "next/link";
import Image from "next/image";
import { Partner } from "@/data/partners";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Link
      href={partner.url}
      target={partner.url.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="block"
    >
    <article className="bg-white rounded-2xl border border-[#E8E4D9] p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-[#C9A265]/40 transition-all duration-200 cursor-pointer">
      {/* Header row: logo + category chip + badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Logo circle */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${partner.logo.startsWith("/") ? "bg-white border border-[#E8E4D9]" : "bg-[#0F1E3C]"}`}>
            {partner.logo.startsWith("/") ? (
              <Image src={partner.logo} alt={partner.name} width={48} height={48} className="object-contain w-full h-full p-1" />
            ) : (
              <span className="text-white font-bold text-sm tracking-wide">{partner.logo}</span>
            )}
          </div>
          {/* Category chips */}
          <div className="flex flex-wrap gap-1">
            {partner.category.map((cat) => (
              <span key={cat} className="text-xs px-2.5 py-1 rounded-full bg-[#F0EDE6] text-[#6B7280] font-medium whitespace-nowrap">
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Special badge */}
        {partner.special && (
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#FDF6E3] text-[#C9A265] border border-[#C9A265]/30 font-medium whitespace-nowrap flex-shrink-0">
            Condições especiais
          </span>
        )}
      </div>

      {/* Company info */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold text-[#0F1E3C] font-playfair leading-snug">
          {partner.name}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
          {partner.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#F0EDE6]" />

      {/* Benefits */}
      <ul className="flex flex-col gap-2 flex-1">
        {partner.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2.5 text-sm text-[#1F2937]">
            <span className="text-[#C9A265] font-semibold mt-px flex-shrink-0 leading-snug">
              ✓
            </span>
            <span className="leading-snug">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="border-t border-[#F0EDE6]" />

      {/* CTA */}
      <button className="w-full border border-[#0F1E3C] text-[#0F1E3C] rounded-xl py-2.5 text-sm font-medium hover:bg-[#0F1E3C] hover:text-white transition-all duration-200 text-center">
        Ver Detalhes
      </button>
    </article>
    </Link>
  );
}

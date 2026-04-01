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
      className="block group"
    >
      <article className="relative bg-white rounded-2xl border border-[#E5E0D8] p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0F1E3C]/8 hover:border-[#C9A265]/50 overflow-hidden">
        {/* Gold accent line — reveals on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A265] via-[#E8C98A] to-[#C9A265] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Header row: logo + category chip + badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Logo */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${partner.logo.startsWith("/") ? "bg-white border border-[#E5E0D8]" : "bg-[#0F1E3C]"}`}>
              {partner.logo.startsWith("/") ? (
                <Image src={partner.logo} alt={partner.name} width={48} height={48} className="object-contain w-full h-full p-1" />
              ) : (
                <span className="text-white font-bold text-sm tracking-wide">{partner.logo}</span>
              )}
            </div>
            {/* Category chips */}
            <div className="flex flex-wrap gap-1">
              {partner.category.map((cat) => (
                <span key={cat} className="text-xs px-2.5 py-1 rounded-full bg-[#F0EAD8] text-[#7A6848] font-medium whitespace-nowrap">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Special badge */}
          {partner.special && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#FDF6E3] text-[#C9A265] border border-[#C9A265]/35 font-semibold whitespace-nowrap flex-shrink-0 tracking-wide">
              Em breve
            </span>
          )}
        </div>

        {/* Company info */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold text-[#0F1E3C] font-playfair leading-snug group-hover:text-[#0F1E3C] transition-colors">
            {partner.name}
          </h3>
          <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
            {partner.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F0EAD8]" />

        {/* Benefits */}
        <ul className="flex flex-col gap-2 flex-1">
          {partner.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-[#1A2540]">
              <span className="text-[#C9A265] font-bold mt-px flex-shrink-0 leading-snug text-base">
                ✓
              </span>
              <span className="leading-snug">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        {partner.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {partner.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#F5F0E8] text-[#9CA3AF] border border-[#E5E0D8]">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-[#F0EAD8]" />

        {/* CTA */}
        <button className="w-full bg-[#0F1E3C] text-white rounded-xl py-2.5 text-sm font-semibold tracking-wide group-hover:bg-[#1A2F50] transition-all duration-200 text-center">
          Ver Detalhes →
        </button>
      </article>
    </Link>
  );
}

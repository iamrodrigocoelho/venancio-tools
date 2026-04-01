import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E8E4D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo-venancio.svg"
                alt="Venancio Tools"
                height={40}
                width={180}
                style={{ width: "auto", height: "40px" }}
                priority
              />
            </Link>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/fale-conosco"
              className="hidden sm:inline-flex items-center border border-[#0F1E3C] text-[#0F1E3C] px-5 py-2 rounded-full text-sm font-semibold tracking-wide hover:bg-[#0F1E3C] hover:text-white transition-all duration-200"
            >
              Fale conosco
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              aria-label="Menu"
            >
              <span className="block w-5 h-0.5 bg-[#0F1E3C] rounded-full" />
              <span className="block w-5 h-0.5 bg-[#0F1E3C] rounded-full" />
              <span className="block w-3.5 h-0.5 bg-[#0F1E3C] rounded-full self-start" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

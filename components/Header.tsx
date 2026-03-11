import Image from "next/image";

const navLinks = ["Início", "Parceiros", "Soluções", "Suporte"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E8E4D9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Venancio Tools"
              height={36}
              width={160}
              style={{ width: "auto", height: "36px" }}
              priority
            />
          </div>

          {/* Navigation — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#1F2937] hover:text-[#0F1E3C] font-medium transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:inline-flex items-center border border-[#0F1E3C] text-[#0F1E3C] px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#0F1E3C] hover:text-white transition-all duration-200"
            >
              Fale Conosco
            </a>

            {/* Hamburger — mobile only (visual) */}
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

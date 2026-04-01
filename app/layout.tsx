import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venancio Tools — Ecossistema de Soluções",
  description:
    "Portal de parceiros e soluções corporativas do Grupo Venancio. Acesso exclusivo a condições especiais negociadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

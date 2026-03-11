import Header from "@/components/Header";
import PartnersPage from "@/components/PartnersPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] flex flex-col">
      <Header />
      <main className="flex-1">
        <PartnersPage />
      </main>
      <Footer />
    </div>
  );
}

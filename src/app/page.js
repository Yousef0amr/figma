import AuctionSection from "@/components/auction-section";
import DiscoverSection from "@/components/discover-section";
import Footer from "@/components/footer";
import GetStartSection from "@/components/get-start-section";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-screen  container mx-auto">
      <Navbar />
      <main className="flex flex-col gap-[120px] row-start-2 items-center sm:items-start mt-[120px]">
        <Header />
        <AuctionSection />
        <GetStartSection />
        <DiscoverSection />
      </main>
      <Footer />
    </div>
  );
}

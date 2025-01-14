import Navbar from '@/components/Navbar';
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
      <Pricing />
      <Footer />
    </>
  );
}

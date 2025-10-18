import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Highlights } from "@/components/landing/Highlights";
import { NeonToolkit } from "@/components/landing/NeonToolkit";
import { TiktokFeed } from "@/components/landing/TiktokFeed";
import { Achievements } from "@/components/landing/Achievements";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <NeonToolkit />
        <TiktokFeed />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

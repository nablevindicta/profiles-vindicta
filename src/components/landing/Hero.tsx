import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowDown, ChevronRight } from "lucide-react";

export const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <div className="relative z-10 text-center px-4 animate-fade-in-down">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-headline uppercase tracking-wider text-primary [text-shadow:_0_0_15px_hsl(var(--primary)/_0.5)]">
          NeonVindicta
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-mono">
          // Unleashing the storm: Pro Valorant Neon main & high-energy TikTok creator.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow duration-300 clip-path-polygon group">
            <a href="#highlights">
              Engage <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

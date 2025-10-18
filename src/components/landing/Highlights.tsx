import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayCircle } from "lucide-react";

export const Highlights = () => {
  const gameplayClips = PlaceHolderImages.filter((img) =>
    img.id.startsWith("gameplay-clip")
  );

  return (
    <section id="highlights" className="py-20 md:py-32 bg-secondary/50">
      <div className="container relative">
        <div className="absolute -top-8 right-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
            02
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Gameplay Highlights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            Witness the speed and precision. A collection of top-tier plays and clutch moments.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {gameplayClips.map((clip, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a href="#" className="block group">
                    <Card className="overflow-hidden relative border-2 border-border hover:border-primary transition-colors duration-300 clip-path-polygon">
                      <CardContent className="p-0 aspect-video flex items-center justify-center">
                        <Image
                          src={clip.imageUrl}
                          alt={clip.description}
                          width={800}
                          height={450}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={clip.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-primary/20"></div>
                        <PlayCircle className="absolute h-16 w-16 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </CardContent>
                    </Card>
                    <p className="text-center mt-3 text-sm font-mono text-foreground/70 group-hover:text-primary transition-colors">
                      Clip {index + 1}: Ace against all odds
                    </p>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-secondary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden sm:flex bg-secondary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

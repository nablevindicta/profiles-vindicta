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
    <section id="highlights" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Gameplay Highlights
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Witness the speed and precision. A collection of top-tier plays and clutch moments.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-screen-lg mx-auto"
        >
          <CarouselContent>
            {gameplayClips.map((clip, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a href="#" className="block group">
                    <Card className="overflow-hidden relative">
                      <CardContent className="p-0 aspect-video flex items-center justify-center">
                        <Image
                          src={clip.imageUrl}
                          alt={clip.description}
                          width={800}
                          height={450}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={clip.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        <PlayCircle className="absolute h-16 w-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </CardContent>
                    </Card>
                    <p className="text-center mt-2 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                      Clip {index + 1}: Ace against all odds
                    </p>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

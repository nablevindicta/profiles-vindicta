import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TikTokIcon } from "./icons";
import { Heart, MessageCircle, ChevronRight } from "lucide-react";

export const TiktokFeed = () => {
  const tiktokVideos = PlaceHolderImages.filter((img) =>
    img.id.startsWith("tiktok-")
  );

  return (
    <section id="tiktok" className="py-20 md:py-32 bg-background">
      <div className="container relative">
        <div className="absolute -top-8 right-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
            04
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Latest from TikTok
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            Catch the latest clips, trends, and gameplay shorts.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {tiktokVideos.map((video, index) => (
            <a href="#" key={index} className="block group">
              <Card className="overflow-hidden relative aspect-[9/16] rounded-lg border-2 border-transparent group-hover:border-primary transition-colors duration-300 clip-path-polygon">
                <Image
                  src={video.imageUrl}
                  alt={video.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={video.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20"></div>
                <div className="absolute bottom-0 left-0 p-2.5 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-xs font-bold font-mono">
                      {Math.floor(Math.random() * 50 + 5)}K
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold text-lg bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)] transition-shadow duration-300 clip-path-polygon group">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <TikTokIcon className="mr-2 h-5 w-5" />
                    Follow on TikTok
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TikTokIcon } from "./icons";
import { Heart, MessageCircle } from "lucide-react";

export const TiktokFeed = () => {
  const tiktokVideos = PlaceHolderImages.filter((img) =>
    img.id.startsWith("tiktok-")
  );

  return (
    <section id="tiktok" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Latest from TikTok
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Catch the latest clips, trends, and gameplay shorts.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {tiktokVideos.map((video, index) => (
            <a href="#" key={index} className="block group">
              <Card className="overflow-hidden relative aspect-[9/16] rounded-lg">
                <Image
                  src={video.imageUrl}
                  alt={video.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={video.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 p-2 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-xs font-bold">
                      {Math.floor(Math.random() * 50 + 5)}K
                    </span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <TikTokIcon className="mr-2 h-5 w-5" />
                    Follow on TikTok
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

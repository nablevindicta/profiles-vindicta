import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const profileImage = PlaceHolderImages.find((img) => img.id === "vindicta-profile");

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
       <div className="container max-w-screen-lg relative">
        <div className="absolute -top-8 left-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
            01
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-center mb-12">
            <span className="text-primary">//</span> About Vindicta
        </h2>
        <Card className="overflow-hidden md:grid md:grid-cols-5 border-2 border-border bg-secondary/50 clip-path-polygon">
          <div className="md:col-span-2 relative h-64 md:h-full min-h-[350px] clip-path-polygon">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-primary/20 mix-blend-hard-light"></div>
          </div>
          <div className="md:col-span-3 p-8 md:p-12">
            <CardContent className="space-y-6 text-lg text-foreground/80 font-mono">
              <p>
                &gt; From the fast-paced servers of Valorant to the viral trends of TikTok, Vindicta has carved out a name as a formidable Neon main and an engaging content creator. With lightning-fast reflexes and an unparalleled understanding of Neon's kit, every match is a showcase of skill and strategy.
              </p>
              <p>
                &gt; Off the battlefield, Vindicta brings the same energy to TikTok, creating content that's both entertaining and informative for a growing community of fans. This is the home for all the top plays, best moments, and a closer look into the world of a dedicated gamer.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

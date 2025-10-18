import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  const profileImage = PlaceHolderImages.find((img) => img.id === "vindicta-profile");

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-lg">
        <Card className="overflow-hidden md:grid md:grid-cols-3 border-border">
          <div className="md:col-span-1 relative h-64 md:h-full min-h-[300px]">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">About Vindicta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <p>
                From the fast-paced servers of Valorant to the viral trends of TikTok, Vindicta has carved out a name as a formidable Neon main and an engaging content creator. With lightning-fast reflexes and an unparalleled understanding of Neon's kit, every match is a showcase of skill and strategy.
              </p>
              <p>
                Off the battlefield, Vindicta brings the same energy to TikTok, creating content that's both entertaining and informative for a growing community of fans. This is the home for all the top plays, best moments, and a closer look into the world of a dedicated gamer.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

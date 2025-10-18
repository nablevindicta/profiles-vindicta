import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Youtube, ChevronRight } from "lucide-react";
import { TikTokIcon } from "./icons";

const socialLinks = [
  {
    name: "TikTok",
    icon: TikTokIcon,
    handle: "@vindicta.plays",
    url: "https://www.tiktok.com",
    description: "High-energy clips, trending sounds, and raw gameplay. Your daily dose of Neon action.",
  },
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@vindicta.gg",
    url: "https://instagram.com",
    description: "Behind-the-scenes content, setup tours, and personal highlights. The life behind the screen.",
  },
  {
    name: "YouTube",
    icon: Youtube,
    handle: "VindictaVAL",
    url: "https://youtube.com",
    description: "In-depth guides, full match commentaries, and montage showcases. Level up your game.",
  },
];

export const SocialMedia = () => {
  return (
    <section id="socials" className="py-20 md:py-32 bg-background">
      <div className="container relative">
        <div className="absolute -top-8 right-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
          04
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Social Media
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            Stay connected across all platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <Card key={social.name} className="flex flex-col text-center items-center border-2 border-border bg-secondary/50 hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10 clip-path-polygon">
              <CardHeader className="p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary relative overflow-hidden">
                  <social.icon className="w-10 h-10 text-primary" />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <CardTitle className="font-headline text-2xl">{social.name}</CardTitle>
                <p className="text-accent font-mono">{social.handle}</p>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground font-mono text-sm mb-6">{social.description}</p>
                 <Button asChild className="font-bold text-base bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 clip-path-polygon group w-full mt-auto">
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Follow
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

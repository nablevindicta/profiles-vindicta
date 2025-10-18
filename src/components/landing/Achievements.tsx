import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const achievementsList = [
  "Radiant Rank - Act 3, Episode 8",
  "Top 500 EU Neon Player",
  "1M+ Views on TikTok",
  "Community Tournament Winner 2023",
  "Featured on 'Valorant Top Plays'",
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Achievements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            Milestones and accolades from the journey so far.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {achievementsList.map((achievement, index) => (
            <Badge 
              key={index} 
              className="px-6 py-3 text-base font-mono border-2 border-primary/50 bg-primary/10 text-primary transition-colors hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] clip-path-polygon"
            >
              <Trophy className="mr-3 h-5 w-5 text-accent" />
              {achievement}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <section id="achievements" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Achievements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Milestones and accolades from the journey so far.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {achievementsList.map((achievement, index) => (
            <Badge 
              key={index} 
              className="px-4 py-2 text-base font-medium border-primary/50 border bg-primary/10 text-primary transition-colors hover:bg-primary/20"
            >
              <Trophy className="mr-2 h-4 w-4 text-accent" />
              {achievement}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

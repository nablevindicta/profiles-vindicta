import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, FastForward, GitBranchPlus } from "lucide-react";
import { FastLaneIcon } from "./icons";

const abilities = [
  {
    name: "High Gear (E)",
    description: "Instantly channel Neon's power for increased speed. When charged, Alt Fire to trigger an electric slide.",
    icon: FastForward,
  },
  {
    name: "Fast Lane (C)",
    description: "Fires two energy lines forward on the ground that rise into walls of static electricity, blocking vision.",
    icon: FastLaneIcon,
  },
  {
    name: "Relay Bolt (Q)",
    description: "Instantly throws an energy bolt that bounces once. On hitting each surface, it electrifies the ground below with a concussive blast.",
    icon: GitBranchPlus,
  },
  {
    name: "Overdrive (X)",
    description: "Unleash Neon's full power for a short duration, gaining increased speed and a deadly lightning beam with high movement accuracy.",
    icon: Zap,
  },
];

export const NeonToolkit = () => {
  return (
    <section id="toolkit" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Neon's Toolkit
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Mastering the speedster. A breakdown of the abilities that make Neon a force to be reckoned with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {abilities.map((ability) => (
            <Card key={ability.name} className="flex flex-col text-center items-center hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <ability.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{ability.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{ability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

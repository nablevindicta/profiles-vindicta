"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ChevronRight } from "lucide-react";

export const Contact = () => {
  const email = "notvindicta@gmail.com";

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-screen-md relative">
        <div className="absolute -top-8 left-0 text-7xl md:text-9xl font-black font-headline text-border opacity-30 select-none" aria-hidden="true">
            05
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">
            <span className="text-primary">//</span> Contact for Business
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 font-mono">
            For collaborations and business inquiries, please reach out via email.
          </p>
        </div>
        <Card className="bg-background/50 border-2 border-border clip-path-polygon">
            <CardContent className="p-8 md:p-10 text-center">
                <p className="font-mono text-lg text-foreground/80 mb-6">
                    Get in touch for professional opportunities:
                </p>
                <a href={`mailto:${email}`} className="inline-block">
                    <Button size="lg" className="font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow duration-300 clip-path-polygon group">
                        <Mail className="mr-3 h-5 w-5" />
                        {email}
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

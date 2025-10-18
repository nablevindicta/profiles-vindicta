"use client";

import Link from "next/link";
import { Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TikTokIcon, ValorantIcon } from "@/components/landing/icons";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ValorantIcon className="h-8 w-8 text-primary" />
          <span className="font-bold font-headline text-lg uppercase tracking-widest">NeonVindicta</span>
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          <a
            href="#highlights"
            className="px-4 py-2 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary clip-path-polygon"
          >
            Highlights
          </a>
          <a
            href="#tiktok"
            className="px-4 py-2 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary clip-path-polygon"
          >
            TikTok
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary clip-path-polygon"
          >
            Contact
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon className="h-5 w-5 fill-current text-foreground/70 hover:text-accent transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 fill-current text-foreground/70 hover:text-accent transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-foreground/70 hover:text-accent transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

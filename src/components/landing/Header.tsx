"use client";

import Link from "next/link";
import { Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TikTokIcon, ValorantIcon } from "@/components/landing/icons";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <ValorantIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">NeonVindicta</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <a
            href="#highlights"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Highlights
          </a>
          <a
            href="#tiktok"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            TikTok
          </a>
          <a
            href="#contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon className="h-5 w-5 fill-current" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 fill-current" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

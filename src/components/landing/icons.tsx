import type { SVGProps } from "react";
import { Instagram } from "lucide-react";

export const ValorantIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M64 4.88L12.55 34.62v58.76L64 123.12l51.45-29.74V34.62L64 4.88zm0 11.64l40.38 23.32-40.38 23.31-40.38-23.31L64 16.52zM23.62 42.4l34.84 20.12v42.16L23.62 84.5V42.4zm80.76 0v42.1l-34.84 20.18V62.52L104.38 42.4z"/>
  </svg>
);

export const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        {...props}
    >
        <path d="M16.6 5.82a5.34 5.34 0 0 1-5.33-5.33v6.45a2.5 2.5 0 0 0 2.5 2.5c.19 0 .37 0 .55-.05A5.34 5.34 0 0 1 16.6 5.82z"/>
        <path d="M11.27 15.78v-1.9a3.67 3.67 0 0 0-3.66-3.66H2.5v2.8h4.63a.48.48 0 0 1 .48.48v6.95a5.34 5.34 0 0 0 5.32-5.33c-.01-.98-.27-1.93-.76-2.74z"/>
    </svg>
);

export const FastLaneIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 3v18" />
      <path d="M19 3v18" />
    </svg>
  );

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
    <Instagram {...props} />
);

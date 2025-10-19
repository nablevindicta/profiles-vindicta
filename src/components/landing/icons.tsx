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
        viewBox="0 0 2859 3333"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        {...props}
    >
        <path d="M2081 0c55 473 319 755 778 781v532c-279 5-571-108-778-372v2392c-12 10-20 23-20 39 0 22 18 40 40 40s40-18 40-40c0-16-8-30-20-39V0zM0 1386c-5-103 24-204 78-297s125-173 207-236c82-63 173-108 266-133 93-25 188-30 281-12 91 16 180 52 260 106v532c-102-61-210-101-320-117-111-16-221-8-328 23-107 31-209 82-300 152-91 70-169 159-229 261-60 102-101 214-121 331-20 117-18 236 7 351 25 115 71 223 133 320 63 97 141 183 232 254 91 71 192 125 299 159 107 34 217 47 328 37 111-10 220-43 322-96s195-125 278-215v-532c-99 87-209 157-326 205-117 48-238 72-360 70-122-2-242-28-356-75-114-47-222-114-318-199s-181-188-250-302c-69-114-120-239-151-370-31-131-41-267-29-402z"/>
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
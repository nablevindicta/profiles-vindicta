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
        fill="currentColor"
        {...props}
    >
        <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
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

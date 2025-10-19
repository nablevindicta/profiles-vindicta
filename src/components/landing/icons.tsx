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
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-1.06-.63-1.9-1.47-2.42-2.47-1.14-2.22-1.22-4.81-.23-7.18.6-1.43 1.54-2.7 2.7-3.77.9-1.26 2.11-2.2 3.5-2.71 1.51-.48 3.05-.5 4.59-.05.04 1.47-.02 2.95-.01 4.42-.99-.32-2.03-.39-3.03-.22-1.09.19-2.08.7-2.84 1.39-.78.71-1.25 1.6-1.41 2.56-.22 1.39.08 2.83.92 3.91.61.85 1.44 1.46 2.43 1.73.9.24 1.84.23 2.75-.02 1.11-.3 2.14-1.06 2.83-1.95.17-.22.33-.45.47-.69V.02z" />
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

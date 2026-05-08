/**
 * Font utility classes.
 *
 * Keep Google Fonts out of `next/font/google` so Vercel does not need to
 * download fonts during `next build`. The matching stylesheet is loaded in
 * `app/layout.tsx`, and CSS fallbacks live in `app/globals.css`.
 */
export const inter = {
  className: "font-sans",
  variable: "font-sans",
} as const;

export const dancingScript = {
  className: "font-cursive",
  variable: "font-cursive",
} as const;
import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Rishav Kumar Garg | Web Developer & Graphic Designer",
  description:
    "Portfolio of Rishav Kumar Garg – a Computer Science & Design student at MITS Gwalior who blends modern web development with graphic and visual design.",
  keywords: [
    "Rishav Kumar Garg",
    "Rishav portfolio",
    "web developer",
    "graphic designer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "Tailwind CSS",
    "UI/UX design",
    "MITS Gwalior",
    "Computer Science and Design",
    "CS & Design",
    "space portfolio",
    "3D portfolio",
  ],
  authors: [
    {
      name: "Rishav Kumar Garg",
      url: "https://www.linkedin.com/in/rishav-kumar-garg-532828235/",
    },
  ],
  creator: "Rishav Kumar Garg",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Rishav Kumar Garg | Web Developer & Graphic Designer",
    description:
      "Portfolio of Rishav Kumar Garg – building clean, bold, and responsive web experiences.",
    siteName: "Rishav Kumar Garg Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Kumar Garg | Web Developer & Graphic Designer",
    description:
      "Portfolio of Rishav Kumar Garg – building clean, bold, and responsive web experiences.",
    creator: "@rishav",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} as const;

import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// ─── Skill Data ─────────────────────────────────────────────────────────────

export const SKILL_DATA = [
  { skill_name: "HTML",         image: "html.png",        width: 80, height: 80 },
  { skill_name: "CSS",          image: "css.png",         width: 80, height: 80 },
  { skill_name: "JavaScript",   image: "js.png",          width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png",    width: 80, height: 80 },
  { skill_name: "React",        image: "react.png",       width: 80, height: 80 },
  { skill_name: "Redux",        image: "redux.png",       width: 80, height: 80 },
  { skill_name: "React Query",  image: "reactquery.png",  width: 80, height: 80 },
  { skill_name: "TypeScript",   image: "ts.png",          width: 80, height: 80 },
  { skill_name: "Next.js 14",   image: "next.png",        width: 80, height: 80 },
  { skill_name: "Framer Motion",image: "framer.png",      width: 80, height: 80 },
  { skill_name: "Stripe",       image: "stripe.png",      width: 80, height: 80 },
  { skill_name: "Node.js",      image: "node.png",        width: 80, height: 80 },
  { skill_name: "MongoDB",      image: "mongodb.png",     width: 40, height: 40 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML",         image: "html.png",        width: 80, height: 80 },
  { skill_name: "CSS",          image: "css.png",         width: 80, height: 80 },
  { skill_name: "JavaScript",   image: "js.png",          width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png",    width: 80, height: 80 },
  { skill_name: "Material UI",  image: "mui.png",         width: 80, height: 80 },
  { skill_name: "React",        image: "react.png",       width: 80, height: 80 },
  { skill_name: "Redux",        image: "redux.png",       width: 80, height: 80 },
  { skill_name: "React Query",  image: "reactquery.png",  width: 80, height: 80 },
  { skill_name: "TypeScript",   image: "ts.png",          width: 80, height: 80 },
  { skill_name: "Next.js 14",   image: "next.png",        width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js",    image: "node.png",       width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png",    width: 80, height: 80 },
  { skill_name: "MongoDB",    image: "mongodb.png",    width: 40, height: 40 },
  { skill_name: "Firebase",   image: "firebase.png",   width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL",      image: "mysql.png",      width: 70, height: 70 },
  { skill_name: "Prisma",     image: "prisma.png",     width: 70, height: 70 },
  { skill_name: "GraphQL",    image: "graphql.png",    width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri",        image: "tauri.png",       width: 70, height: 70 },
  { skill_name: "Docker",       image: "docker.png",      width: 70, height: 70 },
  { skill_name: "Figma",        image: "figma.png",       width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;

// ─── Projects ────────────────────────────────────────────────────────────────

export const FEATURED_PROJECT = {
  title: "TravelBuddy",
  subtitle: "Modern Travel Platform",
  description:
    "A complete travel platform with immersive UI, responsive layouts, and smooth booking experiences. Users can explore destinations, discover places and book packages seamlessly.",
  highlights: [
    "Responsive & Modern UI",
    "Interactive Components",
    "Smooth Animations & Transitions",
    "Seamless Booking Flow",
  ],
  techStack: ["React", "Firebase", "Tailwind CSS", "REST API"],
  image: "/projects/project-2.png",
  githubLink: "https://github.com/the-rishav01580/TravelBuddy",
  liveLink: "https://travelbuddy-sandy.vercel.app/",
};

export const OTHER_PROJECTS = [
  {
    title: "Business Management System",
    subtitle: "Service & Booking Dashboard",
    description:
      "Scalable dashboard for managing services, bookings and customers with clean admin workflow.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    image: "/projects/project-1.png", // fallback image
    githubLink: "https://github.com/the-rishav01580/mbm",
    liveLink: "https://mbm-nine-zeta.vercel.app/auth",
  },
  {
    title: "SMS Spam Detection",
    subtitle: "Smart Spam Detection",
    description:
      "Web app to detect spam messages with a clean interface and real-time prediction results.",
    techStack: ["React", "Firebase"],
    image: "/projects/project-1.png", // fallback image
    githubLink: "https://github.com/the-rishav01580/NLP-powered-SMS-spam-detection",
    liveLink: "#",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Creative Developer Portfolio",
    description:
      "Space-themed portfolio with modern animations, smooth interactions and immersive user experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons"],
    image: "/projects/project-3.png",
    githubLink: "https://github.com/the-rishav01580/space-themed-portfolio",
    liveLink: "https://space-themed-portfolio-bice.vercel.app/",
  },
] as const;


// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills",   link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact Me", link: "#contact" }
] as const;

// ─── Socials (navbar) ─────────────────────────────────────────────────────────

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/the_rishav01580/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/the-rishav01580",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/the-rishav01580/",
  },
] as const;

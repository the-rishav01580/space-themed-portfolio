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

export const PROJECTS = [
  {
    title: "E-Mess Portal",
    description:
      "A full-stack web application built with React and deployed on Vercel. Implements real-time meal management, student registration, and billing workflows. Features responsive UI, component-based architecture, and optimized API interactions.",
    image: "/projects/project-1.png",
    link: "https://mbm-nine-zeta.vercel.app/",
  },
  {
    title: "TravelBuddy",
    description:
      "A full-stack travel companion matching web app built with React and deployed on Vercel. Enables users to find and connect with like-minded travel partners. Features responsive UI, dynamic filtering, and seamless user interactions.",
    image: "/projects/project-2.png",
    link: "https://travelbuddy-sandy.vercel.app/",
  },
  {
    title: "Space Themed Portfolio",
    description:
      "An immersive 3D space-themed portfolio built with Next.js 14, Three.js, and Framer Motion. Features a WebGL star background, interactive floating ID card, and smooth scroll animations.",
    image: "/projects/project-3.png",
    link: "https://space-themed-portfolio-bice.vercel.app/",
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
    link: "https://www.linkedin.com/in/rishav-kumar-garg-532828235/",
  },
] as const;

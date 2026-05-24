import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaSuitcase, FaDesktop } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { SiFirebase, SiReact, SiTailwindcss, SiNextdotjs, SiFramer, SiTypescript } from "react-icons/si";

type ProjectCardProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: readonly string[];
  githubLink: string;
  liveLink: string;
};

export const ProjectCard = ({
  src,
  title,
  subtitle,
  description,
  techStack,
  githubLink,
  liveLink,
}: ProjectCardProps) => {

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react": return <SiReact className="text-cyan-400" />;
      case "firebase": return <SiFirebase className="text-yellow-500" />;
      case "tailwind css": return <SiTailwindcss className="text-teal-400" />;
      case "next.js": return <SiNextdotjs className="text-white" />;
      case "framer motion": return <SiFramer className="text-pink-500" />;
      case "typescript": return <SiTypescript className="text-blue-500" />;
      case "react icons": return <SiReact className="text-pink-400" />;
      default: return null;
    }
  };

  const getProjectIcon = (title: string) => {
    if (title.includes("Business")) return <FaSuitcase className="text-purple-500" />;
    if (title.includes("Spam")) return <BiMessageSquareDots className="text-green-500" />;
    return <FaDesktop className="text-yellow-500" />;
  };

  const getButtonColor = (title: string) => {
    if (title.includes("Business")) return "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500";
    if (title.includes("Spam")) return "from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500";
    return "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400";
  };

  const getCardTheme = (title: string) => {
    if (title.includes("Business")) return "border-purple-500/20 hover:border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.05)]";
    if (title.includes("Spam")) return "border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]";
    return "border-amber-500/20 hover:border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)]";
  };

  const getIconTheme = (title: string) => {
    if (title.includes("Business")) return "bg-purple-500/10 border-purple-500/20";
    if (title.includes("Spam")) return "bg-emerald-500/10 border-emerald-500/20";
    return "bg-amber-500/10 border-amber-500/20";
  };

  return (
    <div className={`flex flex-col relative overflow-hidden rounded-2xl bg-[#030014]/50 backdrop-blur-md h-full border transition-all duration-300 ${getCardTheme(title)}`}>
      
      {/* Top Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg border ${getIconTheme(title)}`}>
            {getProjectIcon(title)}
          </div>
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
        
        <h2 className="text-sm font-medium text-purple-400 mb-3">{subtitle}</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-2">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F0826] border border-[#2A0E61]">
              {getTechIcon(tech)}
              <span className="text-xs text-gray-300">{tech}</span>
            </div>
          ))}
        </div>

        
      </div>

      {/* Embedded Image Mockup */}
      <div className="p-3 pt-0 mt-auto">
        <div className="w-full aspect-video relative rounded-xl overflow-hidden group shadow-[0_0_15px_rgba(42,14,97,0.2)] border border-[#2A0E61]/30">
           <Image 
             src={src} 
             alt={title} 
             fill 
             className="object-cover group-hover:scale-105 transition-transform duration-500" 
           />
        </div>
      </div>

      {/* Buttons */}
        <div className="flex gap-3 p-4 mt-auto">
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#110D1F] hover:bg-[#1A1A2E] border border-[#2A0E61] transition-colors text-white text-sm font-medium"
          >
            <FaGithub className="text-lg" />
            GitHub
          </Link>
          <Link
            href={liveLink}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r transition-colors text-white text-sm font-medium ${getButtonColor(title)}`}
          >
            <FaExternalLinkAlt />
            Live Demo
          </Link>
        </div>

    </div>
  );
};

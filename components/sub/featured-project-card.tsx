import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaCode, FaCheckCircle, FaStar, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { SiFirebase, SiReact, SiTailwindcss } from "react-icons/si";
import { FEATURED_PROJECT } from "@/constants";

export const FeaturedProjectCard = () => {
  const {
    title,
    subtitle,
    description,
    highlights,
    techStack,
    image,
    githubLink,
    liveLink,
  } = FEATURED_PROJECT;

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react": return <SiReact className="text-cyan-400" />;
      case "firebase": return <SiFirebase className="text-yellow-500" />;
      case "tailwind css": return <SiTailwindcss className="text-teal-400" />;
      default: return <FaCode className="text-gray-400" />;
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto rounded-2xl border border-[#2A0E61] bg-[#030014]/50 backdrop-blur-md overflow-hidden p-5 md:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
      
      {/* Content Section (55%) */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between">
        
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Header (Badge, Title, Subtitle) */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1A2E] border border-[#2A0E61]">
                <FaStar className="text-purple-500 text-xs" />
                <span className="text-xs font-medium text-gray-300">Featured</span>
              </div>
              <h2 className="text-sm md:text-base text-purple-400 font-medium">{subtitle}</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <FaGlobe className="text-2xl md:text-3xl text-cyan-400 shrink-0" />
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Highlights */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <HiLightningBolt className="text-purple-500 text-sm" />
              <h3 className="text-sm font-semibold text-white">Highlights</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-500 shrink-0 mt-0.5 text-sm" />
                  <span className="text-sm text-gray-300 leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack & Buttons Parallel */}
        <div className="flex flex-col xl:flex-row gap-4 justify-between items-start xl:items-end mt-5 pt-4 border-t border-[#2A0E61]/50">
          
          {/* Tech Stack */}
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-2">
              <FaCode className="text-gray-400 text-sm" />
              <h3 className="text-sm font-semibold text-white">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#0F0826] border border-[#2A0E61]/80">
                  {getTechIcon(tech)}
                  <span className="text-xs text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full xl:w-auto shrink-0">
            <Link
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 xl:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#110D1F] hover:bg-[#1A1A2E] border border-[#2A0E61] transition-colors text-white text-xs sm:text-sm font-medium"
            >
              <FaGithub className="text-base" />
              GitHub
            </Link>
            <Link
              href={liveLink}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 xl:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-colors text-white text-xs sm:text-sm font-medium"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section (45%) */}
      <div className="w-full lg:w-[45%]">
         <div className="w-full h-full relative rounded-xl overflow-hidden group shadow-[0_0_20px_rgba(42,14,97,0.2)] border border-[#2A0E61]/30">
           <Image
              src={image}
              alt={title}
              width={1000}
              height={600}
              className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
           />
         </div>
      </div>
    </div>
  );
};

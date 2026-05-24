import { ProjectCard } from "@/components/sub/project-card";
import { FeaturedProjectCard } from "@/components/sub/featured-project-card";
import { OTHER_PROJECTS } from "@/constants";
import { FaRocket } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10 relative z-[20] w-full"
    >
      {/* ================= SPACE DECOR ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Planet */}
        <div className="absolute top-12 right-[8%] md:right-[16%] opacity-90 hidden md:block animate-[floatPlanet_10s_ease-in-out_infinite]">
          <div className="relative">
            <IoPlanet className="text-[90px] text-violet-400/90 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]" />

            {/* Orbit ring */}
            <div className="absolute top-1/2 left-1/2 w-[125%] h-[30%] border border-violet-400/25 rounded-full -translate-x-1/2 -translate-y-1/2 rotate-[18deg]" />

            {/* glow */}
            <div className="absolute inset-0 blur-3xl bg-violet-500/10 rounded-full" />
          </div>
        </div>

        {/* Rocket */}
        <div className="absolute top-28 left-[6%] md:left-[14%] hidden md:block animate-[rocketFloat_6s_ease-in-out_infinite]">
          <div className="relative">
            <FaRocket className="text-5xl text-fuchsia-400 -rotate-45 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]" />

            {/* rocket trail */}
            <div className="absolute left-[-14px] top-[44px] h-[2px] w-24 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/40 to-fuchsia-400 rotate-[-45deg]" />
          </div>
        </div>

        {/* Floating stars */}
        <div className="absolute top-20 left-[35%] w-[2px] h-[2px] rounded-full bg-violet-300 animate-pulse" />
        <div className="absolute top-40 right-[32%] w-[4px] h-[4px] rounded-full bg-fuchsia-400 blur-[1px] animate-pulse" />
        <div className="absolute top-12 right-[45%] w-[3px] h-[3px] rounded-full bg-violet-300 animate-ping" />
        <div className="absolute bottom-20 left-[30%] w-[2px] h-[2px] rounded-full bg-purple-300 animate-pulse" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-16 px-4">

        {/* top badge */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <span className="uppercase tracking-[0.35em] text-sm md:text-base font-medium text-violet-300">
            My Work
          </span>

          <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(168,85,247,0.4)]">
            Projects
          </span>
        </h2>

        {/* subtitle */}
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
          A curated collection of projects where{" "}
          <span className="text-violet-300 font-medium">
            design
          </span>{" "}
          meets{" "}
          <span className="text-fuchsia-300 font-medium">
            functionality
          </span>
          , crafted with a futuristic engineering mindset.
        </p>
      </div>

      <div className="w-full flex flex-col gap-10 px-5 md:px-10 max-w-[1400px] mx-auto">
        {/* Featured Project */}
        <FeaturedProjectCard />

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-8xl mx-auto mt-1">
          {OTHER_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="w-full max-w-4xl mx-auto mt-1 rounded-full border border-[#2A0E61] bg-[#0A0515]/80 backdrop-blur-md py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left shadow-[0_0_20px_rgba(42,14,97,0.2)]">
          <FaRocket className="text-pink-500 text-xl shrink-0" />
          <p className="text-gray-300 text-sm md:text-base">
            Each project is built with <span className="text-purple-400 font-semibold">passion, precision</span> and a focus on creating <span className="text-purple-400 font-semibold">exceptional user experiences</span>.
          </p>
        </div>
      </div>
    </section>
  );
};


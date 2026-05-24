import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Contact from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <Hero />
          <Skills />
        </div>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

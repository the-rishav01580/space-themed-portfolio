import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

type SkillItem = {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
};

const SkillRow = ({ skills }: { skills: readonly SkillItem[] }) => (
  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
    {skills.map((skill, i) => (
      <SkillDataProvider
        key={skill.skill_name}
        src={skill.image}
        name={skill.skill_name}
        width={skill.width}
        height={skill.height}
        index={i}
      />
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 relative py-20 min-h-[60vh]"
    >
      <SkillText />

      <SkillRow skills={SKILL_DATA} />
      <SkillRow skills={FRONTEND_SKILL} />
      <SkillRow skills={BACKEND_SKILL} />
      <SkillRow skills={FULLSTACK_SKILL} />
      <SkillRow skills={OTHER_SKILL} />

      {/* Background video – decorative */}
      <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <video
          className="w-full h-full object-cover opacity-30"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

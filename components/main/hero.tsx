import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="about-me" className="relative flex flex-col h-full w-full">
      {/*
        Black-hole video — decorative background.
        preload="none" defers network cost until play starts.
        aria-hidden removes it from the accessibility tree.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-30"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </section>
  );
};

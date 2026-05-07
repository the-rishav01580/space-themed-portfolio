"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { dancingScript } from "@/app/fonts";
import dynamic from "next/dynamic";

const FloatingCardCanvas = dynamic(
  () => import("../main/FloatingCardCanvas").then((m) => m.FloatingCardCanvas),
  { ssr: false, loading: () => <div className="h-[480px] sm:h-[560px] md:h-[680px] w-full" /> }
);

export const HeroContent = () => {
  /* SCROLL EFFECT */
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  /* MOUSE REFLECTION */
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-28 md:mt-40 w-full z-[20] gap-10"
    >
      {/* LEFT SIDE – TEXT */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-2 px-3 border border-[#7042f88b]
          flex items-center gap-2 rounded-full w-fit"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <span className="text-xs md:text-sm text-gray-300">
            Web Developer · Graphic Designer · CS & Design (MITS Gwalior)
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.4)}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white max-w-[650px]"
        >
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            visual-first
          </span>{" "}
          web experiences for modern brands.
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-gray-400 max-w-[620px]"
        >
          I&apos;m{" "}
          <span className="font-semibold text-sky-300">
            Rishav Kumar Garg
          </span>
          , a Computer Science & Design student (Batch&apos;27) from
          MITS Gwalior. I combine Web Development and Graphic Design
          to build clean, bold, and responsive interfaces.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4 items-center"
        >
          <a
            href="#projects"
            className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white"
          >
            View my work
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white underline-offset-2 hover:underline"
          >
            Explore my skills
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE - ID CARD */}
      <motion.div 
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <FloatingCardCanvas />
      </motion.div>

    </motion.div>
  );
};

"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { FloatingCard } from "./FloatingCard";

export function FloatingCardCanvas() {
  return (
    <div className="h-[800px] w-full relative z-10 flex items-center justify-center">
      {/* 
        Ensure no SSR errors by wrapping the Canvas logic here inside a "use client" component. 
        Canvas setup includes ambient and directional lights.
      */}
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        {/* Main light for depth and premium look */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Add environment for realistic lighting reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <FloatingCard />
        </Suspense>
      </Canvas>
    </div>
  );
}

"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import type { Points as PointsType } from "three";

function generateSpherePoints(numPoints: number, radius: number): Float32Array {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    // Generate random point in sphere using spherical coordinates
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;

    const sinPhi = Math.sin(phi);
    points[i * 3] = r * sinPhi * Math.cos(theta);
    points[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);

  // Generate 1667 points exactly (1667 * 3 = 5001 values)
  const sphere = useMemo(() => generateSpherePoints(1667, 1.2), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

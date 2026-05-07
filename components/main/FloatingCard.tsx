"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// Card dimensions — aspect ratio matches id-card.png (1600 × 886)
const CARD_W = 3.2;
const CARD_H = CARD_W * (886 / 1600);

export function FloatingCard() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHovered = useRef(false);

  const texture = useTexture("/id-card.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;
    const lerp = THREE.MathUtils.lerp;
    const m = meshRef.current;

    // Idle float
    const floatY = Math.sin(t * 1.8) * 0.12;

    let targetX = 0;
    let targetY = floatY;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetScale = 1;

    if (isHovered.current) {
      targetX = (mouse.x * viewport.width) / 15;
      targetY += (mouse.y * viewport.height) / 15;
      targetRotX = mouse.y * 0.45;
      targetRotY = mouse.x * 0.45;
      const dist = Math.sqrt(mouse.x ** 2 + mouse.y ** 2);
      targetScale = 1 + (1 - Math.min(dist, 1)) * 0.06;
    }

    m.position.x = lerp(m.position.x, targetX, 0.05);
    m.position.y = lerp(m.position.y, targetY, 0.05);
    m.rotation.x = lerp(m.rotation.x, targetRotX, 0.05);
    m.rotation.y = lerp(m.rotation.y, targetRotY, 0.05);
    m.scale.setScalar(lerp(m.scale.x, targetScale, 0.05));
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => {
        isHovered.current = true;
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        isHovered.current = false;
        document.body.style.cursor = "auto";
      }}
    >
      {/* PlaneGeometry — reliable, no NaN risk. Rounded corners are in the texture. */}
      <planeGeometry args={[CARD_W, CARD_H]} />
      <meshPhysicalMaterial
        map={texture}
        clearcoat={1}
        clearcoatRoughness={0.08}
        roughness={0.3}
        metalness={0.15}
        transparent
        alphaTest={0.01}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
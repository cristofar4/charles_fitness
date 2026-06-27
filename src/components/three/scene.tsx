"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------ Particles --------------------------------- */

function ParticleField({ count = 1400 }: { count?: number }) {
  const ref = React.useRef<THREE.Points>(null);
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00B2FF"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* --------------------------- Floating objects ----------------------------- */

function Blob({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.6}
          distort={0.4}
          speed={1.6}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

/* --------------------------- Pointer parallax ----------------------------- */

function Rig({ children, intensity = 0.6 }: { children: React.ReactNode; intensity?: number }) {
  const group = React.useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * intensity,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * intensity * 0.5,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
}

/* ------------------------------- Scene ------------------------------------ */

export default function Scene({ variant = "hero" }: { variant?: "hero" | "subtle" }) {
  const subtle = variant === "subtle";
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <fog attach="fog" args={["#050506", 9, 22]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 5, 6]} intensity={60} color="#00B2FF" />
      <pointLight position={[-7, -4, 2]} intensity={45} color="#CCFF00" />
      <pointLight position={[0, 6, -6]} intensity={25} color="#A855F7" />

      <Rig intensity={subtle ? 0.25 : 0.6}>
        <ParticleField count={subtle ? 900 : 1500} />
        {!subtle && (
          <>
            <Blob position={[-3.4, 1.3, -1]} color="#00B2FF" scale={1.25} speed={1.1} />
            <Blob position={[3.6, -1.1, -0.5]} color="#CCFF00" scale={0.9} speed={1.5} />
            <Blob position={[1.5, 2.2, -3]} color="#A855F7" scale={0.6} speed={1.8} />
          </>
        )}
        {subtle && <Blob position={[3.2, -0.6, -1]} color="#00B2FF" scale={0.8} speed={1.2} />}
      </Rig>
    </Canvas>
  );
}

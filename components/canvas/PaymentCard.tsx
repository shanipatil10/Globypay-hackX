// components/canvas/PaymentCard.tsx
"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

function FloatingCard() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle floating motion
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.cos(t / 2) / 8 + (state.mouse.y * 0.3), 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, Math.sin(t / 4) / 8 + (state.mouse.x * 0.3), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        {/* The Card Body */}
        <boxGeometry args={[3.5, 2.2, 0.05]} />
        <meshPhysicalMaterial 
          color={hovered ? "#121212" : "#ffffff"}
          metalness={0.9}
          roughness={0.1}
          transmission={0.5} // Glass effect
          thickness={0.2}
          clearcoat={1}
        />
        
        {/* Globypay Branding on Card */}
        <Text
          position={[-1.2, 0.7, 0.03]}
          fontSize={0.2}
          color={hovered ? "white" : "black"}
          font="/fonts/Geist-Bold.ttf"
        >
          GLOBYPAY
        </Text>
        
        {/* Chip Detail */}
        <mesh position={[-1.2, 0, 0.03]}>
          <planeGeometry args={[0.5, 0.4]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.3} />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function CardCanvas() {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <FloatingCard />
      </Canvas>
    </div>
  );
}
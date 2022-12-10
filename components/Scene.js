import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { themes } from "utils/variables";
import { useTheme } from "utils/provider";
import Ball from "public/Ball";
import Cube from "public/Cube";
import Pyramid from "public/Pyramid";

export const Scene = ({ scrollTop, windowSize }) => {
  const { theme } = useTheme();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        zIndex: -100,
        background: themes[theme].primary,
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={50}
          makeDefault
          rotation={[0, 0, 0]}
          position={windowSize.width > 500 ? [0, 0, 0] : [0, 0, 10]}
        />
        <ambientLight />
        <pointLight position={[-10, -10, 100]} />
        <pointLight
          position={[-10, -10, 10]}
          color={themes[theme].primary}
          intensity={0}
        />
        <Pyramid px={7.5} py={0} pz={-15} ry={1} scrollTop={scrollTop} />
        <Ball px={7.5} py={-30} pz={-30} ry={2} scrollTop={scrollTop} />
        <Cube px={-7.5} py={-15} pz={-20} ry={2} scrollTop={scrollTop} />
      </Suspense>
    </Canvas>
  );
};

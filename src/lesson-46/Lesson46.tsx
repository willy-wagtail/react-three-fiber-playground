import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Placeholder from "./Placeholder";
import Fox from "./Fox";

export default function Lesson46() {
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Model />
      </Suspense>

      <Fox />
    </>
  );
}

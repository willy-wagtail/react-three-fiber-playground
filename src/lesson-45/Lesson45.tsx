import {
  OrbitControls,
  useHelper,
  BakeShadows,
  SoftShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Lesson45() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });

  // Add light helpers
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <SoftShadows />
      {/* <BakeShadows /> */}

      {/* Another way to set background colour of parent (scene is implicit as no other parent) */}
      <color args={["ivory"]} attach="background" />

      <OrbitControls makeDefault />

      <directionalLight
        ref={directionalLightRef}
        position={[1, 2, 3]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />

      <ambientLight intensity={0.5} />

      <mesh position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="yellow" />
      </mesh>

      <mesh ref={cubeRef} position-x={2} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        scale={10}
        rotation-x={Math.PI * -0.5}
        position-y={-1}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}

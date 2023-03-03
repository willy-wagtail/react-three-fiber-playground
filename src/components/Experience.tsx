import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import CustomObject from "./CustomObject";

export default function Experience() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  /**
   * For consistency between monitors with different FPS,
   * use delta or elapsedTime rather than a constant for animations.
   */
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;

    /** Animate camera using elapsedTime */
    // const cameraAngle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(cameraAngle) * 8;
    // state.camera.position.z = Math.cos(cameraAngle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <OrbitControls />

      <directionalLight position={[1, 2, 3]} intensity={1.2} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={cubeRef} scale={1.5} position-x={2}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh scale={10} position-y={-1} rotation-x={Math.PI * -0.5}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  );
}

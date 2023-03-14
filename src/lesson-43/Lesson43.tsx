import { useRef } from "react";
import {
  MeshReflectorMaterial,
  Float,
  Html,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

import CustomObject from "./CustomObject";

export default function Lesson43() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);

  const { position, colour } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    colour: "#ff0000",
  });

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
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.2} />
      <ambientLight intensity={0.5} />

      <group>
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
          scale={100}
          fixed={true} // perspective or not?
        >
          <mesh ref={sphereRef} position={[position.x, position.y, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color={colour} />

            <Html
              position={[1, 1, 1]}
              wrapperClass="label"
              center
              distanceFactor={6} // this adds some perspective
              occlude={[cubeRef, sphereRef]} // hide if centre is behind objects
            >
              This is a sphere 👍
            </Html>
          </mesh>
        </PivotControls>

        <mesh ref={cubeRef} scale={1.5} position-x={2}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>

        {/* <TransformControls object={cubeRef} mode="translate" /> */}
      </group>

      <mesh scale={10} position-y={-1} rotation-x={Math.PI * -0.5}>
        <planeGeometry />

        <MeshReflectorMaterial
          mirror={0.75}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>

      {/* <CustomObject /> */}
      <Float speed={2} floatIntensity={3}>
        {/* See Troika three text docs: https://www.npmjs.com/package/troika-three-text */}
        <Text
          font="./43/bangers-v20-latin-regular.woff"
          color="salmon"
          position-y={2}
          fontSize={1}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F!
          {/* <meshNormalMaterial /> */}
        </Text>
      </Float>
    </>
  );
}

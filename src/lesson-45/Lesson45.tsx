import {
  OrbitControls,
  useHelper,
  BakeShadows,
  SoftShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

export default function Lesson45() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  // Add light helpers - note it impacts AccumulatedShadows
  const directionalLightRef = useRef<THREE.DirectionalLight>(null!);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;

    // Move cube side to side to see AccumulatedShadows delay
    // const elapsedTime = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(elapsedTime);
  });

  const { colour, opacity, blur } = useControls("contact shadows", {
    colour: "#4b2709", // 1d8f75
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  // when setting sun position, instead of this, use spherical coordinates using Vector3.setFromSpherical
  // by setting radius, phi, theta.
  // const { sunPosition } = useControls("sky", {
  //   sunPosition: { value: [1, 2, 3] },
  // });

  // const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
  //   useControls("environment map", {
  //     envMapIntensity: { value: 3.5, min: 0, max: 12 },
  //     envMapHeight: { value: 7, min: 0, max: 100 },
  //     envMapRadius: { value: 28, min: 10, max: 1000 },
  //     envMapScale: { value: 100, min: 10, max: 1000 },
  //   });

  return (
    <>
      {/* <SoftShadows /> */}
      {/* <BakeShadows /> */}

      {/* Another way to set background colour of parent (scene is implicit as no other parent) */}
      <color args={["ivory"]} attach="background" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        color="#316d39"
        opacity={0.8}
        position={[0, -0.999, 0]}
        frames={Infinity}
        temporal
        scale={10}
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        resolution={512}
        far={5}
        color={colour}
        opacity={opacity}
        blur={blur}
        frames={1} // bakes the shadow
      /> */}

      {/*
        // Removed to show Environment Map
      <directionalLight
        ref={directionalLightRef}
        // position={[1, 2, 3]}
        position={sunPosition}
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

      <Sky sunPosition={sunPosition} /> */}

      {/* <Environment
        // background
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
        preset="sunset"
        // resolution={32} // only used if env map needs rerendering
        // files={[
        //   `./45/environmentMaps/2/px.jpg`,
        //   `./45/environmentMaps/2/nx.jpg`,
        //   `./45/environmentMaps/2/py.jpg`,
        //   `./45/environmentMaps/2/ny.jpg`,
        //   `./45/environmentMaps/2/pz.jpg`,
        //   `./45/environmentMaps/2/nz.jpg`,
        // ]}
        // files={"./45/environmentMaps/the_sky_is_on_fire_2k.hdr"}
      > */}
      {/* <color args={["#000000"]} attach="background" />

        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}

      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial
            color={[30, 0, 0]}
            // color="red"
          />
        </mesh> */}
      {/* </Environment> */}

      <Stage
        environment="sunset"
        preset="portrait"
        shadows={{ type: "contact", opacity: 0.5, blur: 3 }}
        intensity={1.5}
      >
        <mesh position-x={-2} position-y={1} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="yellow" />
        </mesh>

        <mesh
          ref={cubeRef}
          position-x={2}
          position-y={1}
          scale={1.5}
          castShadow
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>

      {/* <mesh
        scale={10}
        rotation-x={Math.PI * -0.5}
        position-y={0}
        // receiveShadow // remove to use AccumulativeShadows
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}

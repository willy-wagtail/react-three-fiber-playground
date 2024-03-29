/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    cheese: THREE.Mesh;
    meat: THREE.Mesh;
    bottomBun: THREE.Mesh;
    topBun: THREE.Mesh;
  };
  materials: {
    CheeseMaterial: THREE.MeshStandardMaterial;
    SteakMaterial: THREE.MeshStandardMaterial;
    BunMaterial: THREE.MeshStandardMaterial;
  };
};

export default function Hamburger(props: GroupProps) {
  const { nodes, materials } = useGLTF("./46/hamburger.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="cheese"
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        name="meat"
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.82, 0]}
      />
      <mesh
        name="bottomBun"
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        name="topBun"
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.77, 0]}
      />
    </group>
  );
}

useGLTF.preload("./46/hamburger.glb");

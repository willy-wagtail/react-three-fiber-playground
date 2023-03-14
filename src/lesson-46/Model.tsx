import { Clone, useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model() {
  /** The longer way */
  // const model = useLoader(
  //   GLTFLoader,
  //   "./46/hamburger.glb", //"./46/FlightHelmet/glTF/FlightHelmet.gltf"
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );

  /** The drei way */
  const model = useGLTF("./46/hamburger-draco.glb");

  // return <primitive object={model.scene} scale={0.35} />;

  /** Use Clone from drei instead of primitive if you want to reuse geometry and improve performance */
  return (
    <>
      <Clone object={model.scene} scale={0.35} position-x={-6} />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </>
  );
}

useGLTF.preload("./46/hamburger-draco.glb");

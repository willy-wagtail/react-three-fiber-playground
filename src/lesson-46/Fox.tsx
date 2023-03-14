import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

export default function Fox() {
  const fox = useGLTF("/46/Fox/glTF/Fox.gltf");
  const animation = useAnimations(fox.animations, fox.scene);

  const { foxAnimation } = useControls("fox animation", {
    foxAnimation: { value: "Walk", options: animation.names },
  });

  useEffect(() => {
    const action = animation.actions[foxAnimation];
    action!.reset().fadeIn(0.5).play();

    return () => {
      action!.fadeOut(0.5);
    };
  }, [foxAnimation]);

  return (
    <primitive object={fox.scene} scale={0.02} position={[-2.5, 0, 2.5]} />
  );
}

import { Camera, Canvas, ReactThreeFiber, RootState } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";

import "./App.css";
import Lesson43 from "./lesson-43/Lesson43";
import Lesson45 from "./lesson-45/Lesson45";

/** One way of setting background colour of the scene */
// const created = (state: RootState): void => {
//   state.scene.background = new THREE.Color("ivory");
// };

function App() {
  const { perfVisible, lesson } = useControls({
    perfVisible: true,
    lesson: { value: 45, options: [43, 45] },
  });

  return (
    <>
      <Leva collapsed />

      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        // onCreated={created}
      >
        {perfVisible ? <Perf position="top-left" /> : null}

        {(() => {
          switch (lesson) {
            case 43:
              return <Lesson43 />;
            case 45:
              return <Lesson45 />;
            default:
              return null;
          }
        })()}
      </Canvas>
    </>
  );
}

export default App;

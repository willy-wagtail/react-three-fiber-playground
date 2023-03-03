import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";

import "./App.css";
import Lesson43 from "./lesson-43/Lesson43";

function App() {
  const { perfVisible } = useControls({
    perfVisible: false,
  });

  return (
    <>
      <Leva collapsed />

      <Canvas>
        {perfVisible ? <Perf position="top-left" /> : null}

        <Lesson43 />
      </Canvas>
    </>
  );
}

export default App;

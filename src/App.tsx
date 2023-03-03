import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import "./App.css";
import Lesson43 from "./lesson-43/Lesson43";

function App() {
  return (
    <>
      <Leva collapsed={false} />

      <Canvas>
        <Lesson43 />
      </Canvas>
    </>
  );
}

export default App;

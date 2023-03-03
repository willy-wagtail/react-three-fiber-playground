import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";

import "./App.css";
import Lesson43 from "./lesson-43/Lesson43";

function App() {
  const { perfVisible, lesson } = useControls({
    perfVisible: false,
    lesson: { value: 43, options: [43, 44] },
  });

  return (
    <>
      <Leva collapsed />

      <Canvas>
        {perfVisible ? <Perf position="top-left" /> : null}

        {(() => {
          switch (lesson) {
            case 43:
              return <Lesson43 />;
            case 44:
              return <Text>Hello</Text>;
            default:
              return null;
          }
        })()}
      </Canvas>
    </>
  );
}

export default App;

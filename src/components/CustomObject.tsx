import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const triangleCount = 10;
const verticesPerTriangle = 3;
const verticesCount = triangleCount * verticesPerTriangle;
const positionsCount = verticesCount * 3;

export default function CustomObject() {
  const geometryRef = useRef<THREE.BufferGeometry>(null!);

  const positions = useMemo(() => {
    const positions = new Float32Array(positionsCount);

    for (let i = 0; i < positionsCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  /**
   * UseEffect runs after the first render so
   * we know that the geometryRef is defined.
   */
  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={verticesPerTriangle}
          array={positions}
        />
      </bufferGeometry>

      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
}

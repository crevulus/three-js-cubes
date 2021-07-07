import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

// must put box in own component if want to use useFrame
function SpinningMesh({ position, size = [1, 1, 1], color = "pink" }) {
  const mesh = useRef(null);
  // 0.01 frames/position added to y rotation, x rotation set to match. Runs on every rendered frame and causes a diagonal spin.
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    // position = x, y ,z
    <mesh ref={mesh} position={position}>
      {/* define shape of item. args = width, height, depth. */}
      <boxBufferGeometry attach="geometry" args={size} />
      {/* define appearance of item */}
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

export default function Box() {
  return (
    <>
      {/* fov = zoom */}
      <Canvas camera={{ position: [-5, 2, 10], fov: 40 }}>
        <ambientLight intensity={0.3} />
        <SpinningMesh
          position={[0, 1, 0]}
          size={[3, 2, 1]}
          color="lightgreen"
        />
        <SpinningMesh position={[-2, 1, -5]} />
        <SpinningMesh position={[5, 1, -2]} />
      </Canvas>
    </>
  );
}

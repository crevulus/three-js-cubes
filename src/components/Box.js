import React, { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

// must put box in own component if want to use useFrame
function SpinningMesh({
  position,
  size = [1, 1, 1],
  color = "pink",
  speed = 1,
}) {
  const [expanded, setExpanded] = useState(false);

  const mesh = useRef(null);

  // 0.01 frames/position added to y rotation, x rotation set to match. Runs on every rendered frame and causes a diagonal spin.
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const props = useSpring({
    scale: expanded ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    // a.mesh turns mesh into animated component
    <a.mesh
      onClick={() => setExpanded(!expanded)}
      scale={props.scale}
      castShadow
      ref={mesh}
      // position = x, y ,z
      position={position}
    >
      {/* define shape of item. args = width, height, depth. */}
      <boxBufferGeometry attach="geometry" args={size} />
      {/* define appearance of item */}
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.5}
      />
    </a.mesh>
  );
}

export function Box({ position, size, color, speed }) {
  return (
    <SpinningMesh
      castShadow
      position={position}
      size={size}
      color={color}
      speed={speed}
    />
  );
}

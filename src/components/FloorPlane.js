import React from "react";

import { ContactShadows, softShadows } from "@react-three/drei";

softShadows();

export function FloorPlane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="yellow" />
      <ContactShadows />
    </mesh>
  );
}

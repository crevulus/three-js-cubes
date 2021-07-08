import React from "react";
import { StyledMainCanvas } from "../styles/MainCanvas.styles";
import { Box } from "./Box";
import { FloorPlane } from "./FloorPlane";

import { OrbitControls } from "@react-three/drei";

export default function MainCanvas() {
  return (
    <>
      {/* fov = zoom */}
      <StyledMainCanvas
        colorManagement
        shadows
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 100 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight positon={[-10, 0, -20]} intensity={0.5} />
        <FloorPlane />
        <Box position={[0, 1, 0]} size={[3, 2, 1]} color="blue" />
        <Box position={[-2, 1, -5]} speed={3} />
        <Box position={[5, 1, -2]} speed={3} />
        <OrbitControls />
      </StyledMainCanvas>
    </>
  );
}

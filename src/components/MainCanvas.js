import React from "react";
import { StyledMainCanvas } from "../styles/MainCanvas.styles";
import Box from "./Box";

export default function MainCanvas() {
  return (
    <>
      {/* fov = zoom */}
      <StyledMainCanvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          // shadow object: https://threejs.org/docs/#api/en/lights/shadows/DirectionalLightShadow
          shadow={{
            mapSize: { width: 1024, height: 1024 },
            camera: { far: 50, left: -10, right: 10, top: 10, bottom: -10 },
          }}
        />
        <pointLight positon={[-10, 0, -20]} intensity={0.5} />
        <Box position={[0, 1, 0]} size={[3, 2, 1]} color="blue" />
        <Box position={[-2, 1, -5]} />
        <Box position={[5, 1, -2]} />
      </StyledMainCanvas>
    </>
  );
}

"use client";

import React, { useRef } from "react";
// import { Model } from "./model";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";

function Floor(props) {
  return (
    <mesh {...props} recieveshadow>
      {/* <OrbitControls> */}
      <Canvas
        shadows
        // className={css.canvas}
        camera={{
          fov: 20,
          position: [0, 0, 4],
        }}
      >
        <ambientLight color={"white"} intensity={1.5} shadow={true} />
        <pointLight position={[2, 0, 0]} intensity={2} />
        <pointLight position={[0, 0, 2]} intensity={2} />
        <pointLight position={[0, 2, 0]} intensity={2} />
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
        <Model />
      </Canvas>
      {/* </OrbitControls> */}
    </mesh>
  );
}

export default Floor;

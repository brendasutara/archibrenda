// src/three/Scene3D.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Suspense } from "react";
import { BasicLights } from "./BasicLights";
import { DetalleEncuentro } from "../components/models/DetalleEncuentro";

export const Scene3D = () => {
  return (
    <Canvas camera={{ position: [4, 3, 7], fov: 40 }}>
      <Suspense fallback={null}>
        <BasicLights />

        <Center scale={1.3}>
          <DetalleEncuentro />
        </Center>

        <OrbitControls makeDefault enableDamping />
      </Suspense>
    </Canvas>
  );
};

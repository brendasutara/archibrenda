// Scene3D.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Suspense } from "react";
import { BasicLights } from "./BasicLights";
import { DetalleEncuentro } from "../components/models/DetalleEncuentro";

export const Scene3D = () => {
  return (
    <Canvas camera={{ position: [6, 4, 8], fov: 35 }}>
      <Suspense fallback={null}>
        <BasicLights />

        <Center scale={1.5} position={[0, -0.3, 0]}>
          <DetalleEncuentro />
        </Center>

        <OrbitControls
          enableDamping
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  );
};

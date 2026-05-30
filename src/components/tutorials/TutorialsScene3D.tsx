import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { BasicLights } from "../../three/BasicLights";
import { DetalleEncuentro } from "../models/DetalleEncuentro";

export const TutorialsScene3D = () => {
  return (
    <Canvas
      flat
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [7, 5.4, 9.2], fov: 31 }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
    >
      <Suspense fallback={null}>
        <BasicLights />

        <Float speed={1.05} rotationIntensity={0.16} floatIntensity={0.28}>
          <Center scale={1.7} position={[0, -0.38, 0]}>
            <DetalleEncuentro />
          </Center>
        </Float>

        <ContactShadows
          position={[0, -1.85, 0]}
          opacity={0.18}
          scale={7.2}
          blur={3}
          far={4}
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.55}
          minPolarAngle={Math.PI / 3.15}
          maxPolarAngle={Math.PI / 2.12}
          rotateSpeed={0.32}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

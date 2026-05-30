import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";
import { BasicLights } from "./BasicLights";
import { Cocina } from "../components/models/Cocina";

type CameraPosition = [number, number, number];

type Scene3DProps = {
  cameraPosition?: CameraPosition;
  cameraFov?: number;
  modelScale?: number;
  modelPosition?: CameraPosition;
  onFirstInteract?: () => void;
};

export const Scene3D = ({
  cameraPosition = [7.2, 5.3, 9.4],
  cameraFov = 31,
  modelScale = 1.08,
  modelPosition = [0.05, -0.38, 0],
  onFirstInteract,
}: Scene3DProps) => {
  return (
    <Canvas
      flat
      shadows
      dpr={[1, 1.5]}
      camera={{ position: cameraPosition, fov: cameraFov }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
    >
      <Suspense fallback={null}>
        <BasicLights />

        <Float speed={1.12} rotationIntensity={0.14} floatIntensity={0.34}>
          <Center scale={modelScale} position={modelPosition}>
            <Cocina />
          </Center>
        </Float>

        <ContactShadows
          position={[0, -2.08, 0]}
          opacity={0.2}
          scale={8.5}
          blur={3}
          far={4}
        />

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-0.26}
          maxAzimuthAngle={0.26}
          minPolarAngle={Math.PI / 3.05}
          maxPolarAngle={Math.PI / 2.22}
          rotateSpeed={0.34}
          onStart={() => onFirstInteract?.()}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

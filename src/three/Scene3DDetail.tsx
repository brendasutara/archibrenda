import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Suspense } from "react";
import { BasicLights } from "./BasicLights";
import { DetalleEncuentro } from "../components/models/DetalleEncuentro";

export const Scene3DDetail = ({
  onFirstInteract,
}: {
  onFirstInteract?: () => void;
}) => {
  return (
    <Canvas camera={{ position: [7, 6, 10], fov: 32 }} shadows>
      <Suspense fallback={null}>
        <BasicLights />

        <Center scale={1} position={[0, -0.3, 0]}>
          <DetalleEncuentro />
        </Center>

        <OrbitControls
          enableDamping
          dampingFactor={0.08}
          autoRotate
          autoRotateSpeed={0.9}
          onStart={() => onFirstInteract?.()}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  );
};

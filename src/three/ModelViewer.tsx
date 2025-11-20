import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { BasicLights } from "./BasicLights";

type ModelViewerProps = {
  file: string;
};

function Model({ file }: { file: string }) {
  const gltf = useGLTF(file);
  return <primitive object={gltf.scene} />;
}

// muy importante para que Drei cachee el recurso
useGLTF.preload("/models/detalle_de_entrepiso_liviano_en_archicad.glb");

export function ModelViewer({ file }: ModelViewerProps) {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <BasicLights />
          <Model file={file} />
          <OrbitControls enableDamping />
        </Suspense>
      </Canvas>
    </div>
  );
}

import { Environment } from "@react-three/drei";

export function BasicLights() {
  return (
    <>
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <hemisphereLight
        color={"#e3e7ef"}
        groundColor={"#ffffff"}
        intensity={0.6}
      />

      {/* HDR personalizado */}
      <Environment files="hdr/studio_small_08_1k.hdr" background={false} />
    </>
  );
}

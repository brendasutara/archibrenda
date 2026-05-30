import { Center, MeshPortalMaterial, RoundedBox, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import type { ComponentRef } from "react";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Cocina } from "../components/models/Cocina";
import { BasicLights } from "./BasicLights";

type PortalFrameProps = {
  active: boolean;
  onActivate: () => void;
  onFirstInteract?: () => void;
};

export function PortalFrame({
  active,
  onActivate,
  onFirstInteract,
}: PortalFrameProps) {
  const material = useRef<ComponentRef<typeof MeshPortalMaterial> | null>(null);
  const card = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const portalShape = useMemo(() => createRoundedRectShape(3.86, 4.8, 0.16), []);

  useCursor(hovered);

  useFrame((_, delta) => {
    if (!material.current) return;

    easing.damp(
      material.current,
      "blend",
      active ? 1 : hovered ? 0.18 : 0,
      0.28,
      delta
    );

    if (!active && card.current) {
      card.current.rotation.y = THREE.MathUtils.lerp(
        card.current.rotation.y,
        hovered ? -0.08 : -0.16,
        0.06
      );
      card.current.rotation.x = THREE.MathUtils.lerp(
        card.current.rotation.x,
        hovered ? 0.02 : -0.03,
        0.06
      );
    }
  });

  const handleActivate = () => {
    onFirstInteract?.();
    onActivate();
  };

  return (
    <group ref={card} rotation={[-0.03, -0.16, 0]} position={[0, 0.05, 0]}>
      <RoundedBox
        args={[4.25, 5.2, 0.18]}
        radius={0.18}
        smoothness={8}
        position={[0, 0, -0.13]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#f5efe7" roughness={0.72} metalness={0.05} />
      </RoundedBox>

      <mesh
        position={[0, 0, 0]}
        onPointerEnter={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={(event) => {
          event.stopPropagation();
          handleActivate();
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
          handleActivate();
        }}
      >
        <shapeGeometry args={[portalShape, 32]} />
        <MeshPortalMaterial ref={material} blur={0.32} resolution={768}>
          <color attach="background" args={["#f3ded2"]} />
          <fog attach="fog" args={["#f3ded2", 7, 15]} />

          <BasicLights />

          <Center scale={0.92} position={[0, -1.05, -0.45]} rotation={[0, -0.28, 0]}>
            <Cocina />
          </Center>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.75, 0]}>
            <planeGeometry args={[9, 9]} />
            <shadowMaterial transparent opacity={0.22} />
          </mesh>
        </MeshPortalMaterial>
      </mesh>

      <RoundedBox
        args={[4.45, 5.4, 0.08]}
        radius={0.22}
        smoothness={8}
        position={[0, 0, -0.23]}
      >
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.55}
          metalness={0.08}
          transparent
          opacity={0.55}
        />
      </RoundedBox>
    </group>
  );
}

function createRoundedRectShape(width: number, height: number, radius: number) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

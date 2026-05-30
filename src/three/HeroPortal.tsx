import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import type { ElementRef } from "react";
import {
  Center,
  MeshPortalMaterial,
  useCursor,
  type CameraControls as CameraControlsType,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Cocina } from "../components/models/Cocina";

type HeroPortalProps = {
  onFirstInteract?: () => void;
};

export const HeroPortal = ({ onFirstInteract }: HeroPortalProps) => {
  const portalRef = useRef<ElementRef<typeof MeshPortalMaterial>>(null);
  const portalGroupRef = useRef<THREE.Group>(null);
  const frameRef = useRef<THREE.Group>(null);
  const modelGroupRef = useRef<THREE.Group>(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const controls = useThree(
    (state) => state.controls as CameraControlsType | undefined,
  );
  const size = useThree((state) => state.size);

  useCursor(hovered);

  const isMobile = size.width < 768;
  const portalPosition: [number, number, number] = isMobile
    ? [0, -1.35, 0]
    : [1.45, -0.05, 0];
  const portalScale = isMobile ? 0.82 : 1;

  useFrame((state, delta) => {
    if (!portalRef.current) return;

    easing.damp(portalRef.current, "blend", active ? 1 : 0, 0.25, delta);

    const elapsed = state.clock.elapsedTime;
    const pointerX = isMobile ? 0 : state.pointer.x;
    const pointerY = isMobile ? 0 : state.pointer.y;
    const idleStrength = isMobile ? 0.35 : 1;

    if (portalGroupRef.current) {
      const idleRotationY = Math.sin(elapsed * 0.45) * 0.018 * idleStrength;
      const idleRotationX = Math.sin(elapsed * 0.32) * 0.006 * idleStrength;
      const targetRotationX = idleRotationX + pointerY * -0.035;
      const targetRotationY =
        idleRotationY + pointerX * 0.055 + (hovered ? -0.025 : 0);

      easing.dampE(
        portalGroupRef.current.rotation,
        [targetRotationX, targetRotationY, 0],
        0.42,
        delta,
      );
      easing.damp(
        portalGroupRef.current.position,
        "y",
        portalPosition[1] + Math.sin(elapsed * 0.75) * 0.035 * idleStrength,
        0.38,
        delta,
      );
      easing.damp3(
        portalGroupRef.current.scale,
        [
          portalScale * (hovered ? 1.035 : active ? 1.02 : 1),
          portalScale * (hovered ? 1.035 : active ? 1.02 : 1),
          portalScale * (hovered ? 1.035 : active ? 1.02 : 1),
        ],
        0.32,
        delta,
      );
    }

    if (frameRef.current) {
      easing.dampE(
        frameRef.current.rotation,
        [pointerY * -0.012, pointerX * 0.018, 0],
        0.5,
        delta,
      );
    }

    if (modelGroupRef.current) {
      const interactionLift = active ? 1.35 : hovered ? 1.12 : 1;
      const modelRotationY =
        elapsed * 0.075 * interactionLift + pointerX * 0.045;

      easing.dampE(
        modelGroupRef.current.rotation,
        [Math.sin(elapsed * 0.45) * 0.012, modelRotationY, 0],
        0.55,
        delta,
      );
      easing.damp(
        modelGroupRef.current.position,
        "y",
        Math.sin(elapsed * 0.65) * 0.025,
        0.45,
        delta,
      );
    }
  });

  useEffect(() => {
    if (!controls) return;

    if (active) {
      controls.setLookAt(0.5, 0.45, 4.05, 0.95, -0.05, 0, true);
    } else if (isMobile) {
      controls.setLookAt(0, 0.75, 8.25, 0, -0.1, 0, true);
    } else {
      controls.setLookAt(0, 1.2, 7, 0.85, 0, 0, true);
    }
  }, [active, controls, isMobile]);

  const handleInteract = () => {
    onFirstInteract?.();
    setActive((value) => !value);
  };

  return (
    <group
      ref={portalGroupRef}
      position={portalPosition}
      scale={portalScale}
    >
      <group ref={frameRef}>
        {/* SOFT SHADOW / DEPTH BEHIND THE PORTAL */}
        <mesh position={[0.16, -0.16, -0.12]} scale={[1.01, 1.01, 1]}>
          <roundedPlaneGeometry args={[4.2, 3.1, 0.24]} />
          <meshBasicMaterial color="#d9b6d7" transparent opacity={0.32} />
        </mesh>

        {/* OUTER HALO */}
        <mesh position={[0.04, -0.03, -0.08]}>
          <roundedPlaneGeometry args={[4.16, 3.06, 0.28]} />
          <meshStandardMaterial
            color="#fff7fb"
            roughness={0.58}
            metalness={0.04}
            transparent
            opacity={0.76}
          />
        </mesh>

        {/* OUTER FRAME */}
        <mesh position={[0, 0, -0.045]}>
          <roundedPlaneGeometry args={[4.02, 2.92, 0.24]} />
          <meshStandardMaterial
            color="#ead8e8"
            roughness={0.62}
            metalness={0.08}
          />
        </mesh>
      </group>

      {/* INNER PORTAL */}
      <mesh
        name="hero-archicad-portal"
        position={[0, 0, 0]}
        onClick={(event) => {
          event.stopPropagation();
          handleInteract();
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <roundedPlaneGeometry args={[3.72, 2.62, 0.18]} />

        <MeshPortalMaterial
          ref={portalRef}
          side={THREE.DoubleSide}
          events={active}
          worldUnits={false}
          blur={0}
          resolution={512}
        >
          <color attach="background" args={["#f5d7f4"]} />

          {/* LIGHTS INSIDE THE PORTAL */}
          <ambientLight intensity={1.15} />
          <directionalLight
            position={[4, 6, 4]}
            intensity={2.55}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-4, 3, -3]} intensity={0.78} />

          {/* SOFT FLOOR INSIDE PORTAL */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.28, -0.2]}
            receiveShadow
          >
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial color="#f5d7f4" roughness={0.9} />
          </mesh>

          {/* MODEL */}
          <group ref={modelGroupRef}>
            <Center position={[0, -0.62, -1.25]} scale={0.72}>
              <Cocina />
            </Center>
          </group>
        </MeshPortalMaterial>
      </mesh>

      {/* SMALL FLOATING LABEL */}
      <group position={[-1.7, 1.55, 0.08]}>
        <mesh>
          <roundedPlaneGeometry args={[1.35, 0.34, 0.12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
        </mesh>
      </group>
    </group>
  );
};

import "@react-three/fiber";
import { RoundedPlaneGeometry } from "maath/geometry";
import type { ThreeElement } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    roundedPlaneGeometry: ThreeElement<typeof RoundedPlaneGeometry>;
  }
}

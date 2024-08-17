import { DiceRoller } from "../components/DiceRoller";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dice from "../components/Dice";

export const GamePage = () => {
  return (
    <div>
    <Canvas  style={{ width: "100vw"}} camera={{ position: [2, 0, 5], zoom: 20, up: [0, 1, 0], fov: 75, near: 0.1, far: 1000}}>
      <ambientLight/>
      <OrbitControls
      autoRotate={true}
      autoRotateSpeed={10} enableZoom={false}/>
      <Suspense fallback={null}>
        <Dice />
      </Suspense>

    </Canvas>
        <DiceRoller />
    </div>
  );
};

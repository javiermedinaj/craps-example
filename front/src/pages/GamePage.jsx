import { DiceRoller } from "../components/DiceRoller";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dice from "../components/Dice";

export const GamePage = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
    <div>
      <Canvas
        style={{ width: "100%" }}
        camera={{
          position: [2, 0, 5],
          zoom: 10,
          up: [0, 1, 0],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={4.5}
          enableZoom={false}
        />
        <Suspense>
          <Dice rotation={rotation} scale={[3, 3, 3]} />
        </Suspense>
      </Canvas>
      <DiceRoller setRotation={setRotation} />
    </div>
  );
};

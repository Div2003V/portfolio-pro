import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

export default function NeuralNetwork() {
  return (
    <div style={{ height: "400px" }}>
      <Canvas>
        <ambientLight />
        <Sphere />
      </Canvas>
    </div>
  );
}
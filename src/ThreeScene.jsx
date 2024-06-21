import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { getFresnelMat } from "./assets/getFresnelMat";
import earthTexture from "./textures/8k_earth_daymap.jpg"; // Make sure to have a texture image
import nightTexture from "./textures/BlackMarble_2016_01deg.jpg";
import cloudTexture from "./textures/fair_clouds_8k.jpg";
import * as THREE from "three";
import { Html } from "@react-three/drei";

const Earth = () => {
  const [earthMap, nightMap, cloudMap] = useLoader(TextureLoader, [
    earthTexture,
    nightTexture,
    cloudTexture,
  ]);

  const earthRef = useRef();
  const nightRef = useRef();
  const cloudRef = useRef();
  const fresnelRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (nightRef.current) {
      nightRef.current.rotation.y += 0.002;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.002;
    }
    if (fresnelRef.current) {
      fresnelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh ref={earthRef} position={[2, 0, 0]} rotation={[0.41, 0, 0]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial
          map={earthMap}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={nightRef} position={[2, 0, 0]} rotation={[0.41, 0, 0]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial
          map={nightMap}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={cloudRef} position={[2, 0, 0]} rotation={[0.41, 0, 0]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent={true}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={fresnelRef} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1.01, 12]} />
        <primitive object={getFresnelMat()} />
      </mesh>
    </>
  );
};

const EarthScene = () => {
  return (
    <Canvas
      camera={{ position: [3, 0, 3], fov: 75, near: 0.1, far: 1000 }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputColorSpace = THREE.LinearSRGBColorSpace;
      }}
    >
      <directionalLight position={[-2, 0.5, 1.5]} intensity={5} />
      <Stars />
      <OrbitControls enableZoom={true} dampingFactor={0.03} />
      <Html position={[-600, 80, 70]}>
        <div>
          <h1 className="antialiased font-bold italic font-mono text-8xl text-yellow-500 hover:text-red-500 hover:cursor-pointer transition-colors duration-300 ease-in-out delay-200">
            Bless_Bin
          </h1>
          <h2 className=" text-center pr-12 text-5xl font-medium pt-8 text-sky-200 hover:text-green-400 hover:cursor-pointer transition-colors duration-300 ease-in-out delay-200">
            catch phrase
          </h2>
        </div>
      </Html>
      <Earth />
    </Canvas>
  );
};

export default EarthScene;

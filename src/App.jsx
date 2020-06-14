import * as THREE from 'three';
import { render } from 'react-dom';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './css/styles.css';

function MyMaterial({ hovered }) {
  return (
    <meshStandardMaterial
      attach='material'
      color={hovered ? 'hotpink' : 'orange'}
    />
  );
}

function Box({ active, setActive, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.z = ref.current.rotation.x = ref.current.rotation.y += 0.01)
  );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerUp={() => console.log('up')}
      onPointerDown={() => console.log('down')}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <MyMaterial hovered={hovered} />
    </mesh>
  );
}

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box active={active} setActive={setActive} />
      </Canvas>
      <h1>{active ? 'active' : 'inactive'}</h1>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './Box';
import '../css/styles.css';

const Scene = () => {
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
};

export default Scene;

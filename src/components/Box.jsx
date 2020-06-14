import React, { useState, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Box = ({ active, setActive, ...props }) => {
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
      <meshStandardMaterial
        attach='material'
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
};

export default Box;

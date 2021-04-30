import React,  {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber'

export default function MeshGrid(props){
  return(
    <mesh>
      <planeGeometry 
        args={[15,7,1]}
        vertices={10}
      />
      <meshStandardMaterial
        wireframe={true}
        color='blue'
      />
    </mesh>
  )
}
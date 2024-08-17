/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\dice.gltf dice.jsx 
Author: macriciox (https://sketchfab.com/macriciox)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dice-6ee97010819742a8b8713605695ec703
Title: Dice
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/dice.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.053}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.defaultMat} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.defaultMat} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dice.gltf')

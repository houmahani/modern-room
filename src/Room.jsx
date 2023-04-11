import { Center, PresentationControls, useGLTF, useTexture } from '@react-three/drei'

export default function Room() {
  const { nodes } = useGLTF('./modern-living-room.glb')
  const bakedTexture = useTexture('./baked.jpg')
  bakedTexture.flipY = false

  return (
    <PresentationControls zoom={0.8} polar={[-0.4, 0.4]} azimuth={[-0.5, 0.5]}>
      <Center>
        <mesh geometry={nodes.baked.geometry} scale={0.3}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={nodes.window.geometry}
          scale={0.3}
          position={[-0.05, -0.05, nodes.window.position.z]}
        >
          <meshBasicMaterial color={'#FFA868'} />
        </mesh>

        <mesh
          geometry={nodes.window.geometry}
          scale={0.3}
          position={[-0.05, nodes.window.position.z, nodes.window.position.z]}
        >
          <meshBasicMaterial color={'#FFA868'} />
        </mesh>

        {/* <mesh
        geometry={nodes.Glass.geometry}
        position={nodes.Glass.position}
        scale={0.3}
        rotation-x={Math.PI * 0.5}
        rotation-y={Math.PI * 2}
      >
        <meshBasicMaterial color={'#FFA868'} />
      </mesh> */}
      </Center>
    </PresentationControls>
  )
}

useGLTF.preload('./modern-living-room-draco.glb')

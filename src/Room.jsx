import { MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'

export default function Room() {
  const { nodes } = useGLTF('./modern-living-room.glb')
  const bakedTexture = useTexture('./baked.jpg')
  bakedTexture.flipY = false

  return (
    <>
      <group position-y={-0.5} dispose={null}>
        <mesh
          geometry={nodes.baked.geometry}
          scale={0.3}
          position={[nodes.baked.position.x, nodes.baked.position.y, nodes.baked.position.z]}
          rotation={nodes.baked.rotation}
        >
          <meshStandardMaterial map={bakedTexture} />
        </mesh>

        <mesh position={[-0.89, 0.54, 0.835]} rotation={[1.61, 1.74, 1.53]}>
          <planeGeometry args={[0.62, 1.09, 10, 10]} />

          <MeshReflectorMaterial
            resolution={512}
            mirror={0.8}
            blur={[600, 600]}
            mixBlur={2}
            depthScale={0.4}
            minDepthThreshold={1.5}
            maxDepthThreshold={1}
            reflectorOffset={0.05}
            roughness={0.9}
            color={'#f7ebdf'}
          />
        </mesh>

        <mesh
          geometry={nodes.candle.geometry}
          scale={4}
          position={[0.108, 0.242, -0.1435]}
          rotation={nodes.candle.rotation}
        >
          <meshStandardMaterial color={'#FFA53F'} />
        </mesh>

        <mesh
          geometry={nodes.candle001.geometry}
          scale={5}
          position={[0.123, 0.25, -0.159]}
          rotation={nodes.candle001.rotation}
        >
          <meshStandardMaterial color={'#FFA53F'} />
        </mesh>
      </group>
    </>
  )
}

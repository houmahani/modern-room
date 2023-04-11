import { Environment, Html, Lightformer, OrbitControls, SpotLight } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Room from './Room.jsx'
import { Suspense } from 'react'
import { useControls } from 'leva'

export default function Experience() {
  const { color } = useControls({
    color: '#674e41'
  })

  return (
    <>
      <Perf position='top-left' />

      <OrbitControls enableZoom enablePan={false} enableRotate={false} />

      <color args={[color]} attach={'background'} />

      <ambientLight intensity={1.5} />

      <Suspense>
        <Room />
      </Suspense>
    </>
  )
}

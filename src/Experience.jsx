import { Environment, Html, OrbitControls, SpotLight } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Room from './Room.jsx'
import { Suspense } from 'react'

export default function Experience() {
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls makeDefault />
      <directionalLight color={'red'} intensity={10} />
      <color args={['#674e41']} attach={'background'} />

      <Suspense>
        <Room />
      </Suspense>
    </>
  )
}

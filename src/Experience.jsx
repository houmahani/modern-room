import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls, PresentationControls, useHelper } from '@react-three/drei'
import { folder, useControls } from 'leva'
import { Perf } from 'r3f-perf'

import Room from './Room.jsx'

export default function Experience() {
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  const { perfMonitor } = useControls('Configuration', {
    perfMonitor: false
  })

  const { orbitControls } = useControls('Configuration', {
    orbitControls: false
  })

  const { color: backgroundColor } = useControls('Background', {
    color: '#d8b98b'
  })

  const { intensity: ambientLightIntensity, visible: ambientLightVisibility } = useControls(
    'Lights',
    {
      ambientLight: folder({
        intensity: {
          value: 1.5,
          min: 0,
          max: 2,
          step: 0.1
        },
        visible: true
      })
    }
  )

  const { intensity: areaLightIntensity, visible: aeraVisibility } = useControls('Lights', {
    areaLight: folder({
      intensity: {
        value: 10,
        min: 0,
        max: 50,
        step: 0.1
      },
      visible: true
    })
  })

  return (
    <>
      {perfMonitor && <Perf position='top-left' />}

      <color args={[backgroundColor]} attach={'background'} />

      <OrbitControls enabled={orbitControls} />

      <ambientLight visible={ambientLightVisibility} intensity={ambientLightIntensity} />

      <rectAreaLight
        visible={aeraVisibility}
        position={[0, 10, 2]}
        intensity={areaLightIntensity}
      />

      <Suspense>
        <PresentationControls
          snap
          global
          zoom={0.8}
          rotation={[0.5, -0.7, 0]}
          polar={[-0.4, 0.4]}
          azimuth={[-0.8, 0.8]}
        >
          <Room />
        </PresentationControls>
      </Suspense>
    </>
  )
}

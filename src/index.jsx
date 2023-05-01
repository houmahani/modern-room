import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { Leva } from 'leva'
import Experience from './Experience.jsx'
import './style.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <StrictMode>
      <Leva collapsed />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200
        }}
      >
        <Experience />
      </Canvas>
      <Loader />
    </StrictMode>
  </>
)

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import './style.css'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <StrictMode>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, 2, 5]
        }}
      >
        <Experience />
      </Canvas>
      <Loader />
    </StrictMode>
  </>
)

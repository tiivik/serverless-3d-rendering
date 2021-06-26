import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import { Suspense } from 'react'
import GLTFModel from '../components/gltf-model'

const handleOnLoaded = () => {
  console.log('Model loaded')
  window.status = 'ready'
}

export default function ViewerPage() {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }} camera={{ fov: 35 }} shadows>
      <Suspense fallback={null}>
        <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt">
          <GLTFModel model={'/DamagedHelmet.glb'} shadows={true} onLoaded={handleOnLoaded} />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

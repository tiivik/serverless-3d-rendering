import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import { Suspense } from 'react'
import GLTFModel from '../components/gltf-model'
import { useRouter } from 'next/router'

const handleOnLoaded = () => {
  console.log('Model loaded')
  window.status = 'ready'
}

export default function ViewerPage() {
  const router = useRouter()
  const { model } = router.query
  if (!model) return <>No model provided</>

  return (
    <Canvas gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }} camera={{ fov: 35 }} shadows>
      <Suspense fallback={null}>
        <Stage contactShadow shadows adjustCamera intensity={1} environment="city" preset="rembrandt">
          <GLTFModel model={model as string} shadows={true} onLoaded={handleOnLoaded} />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

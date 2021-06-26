import { useGLTF } from '@react-three/drei'
import { useLayoutEffect, useEffect } from 'react'

interface GLTFModelProps {
  model: string
  shadows: boolean
  onLoaded: any
}

export default function GLTFModel(props: GLTFModelProps) {
  const gltf = useGLTF(props.model)

  useLayoutEffect(() => {
    gltf.scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = obj.receiveShadow = props.shadows
        obj.material.envMapIntensity = 0.8
      }
    })
  }, [gltf.scene, props.shadows])

  useEffect(() => {
    props.onLoaded()
  }, [])

  return <primitive object={gltf.scene} />
}

import * as THREE from 'three'

import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'

const createCube = scene => {

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
}

export default createCube;

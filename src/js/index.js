import '../sass/index.sass'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import Stats from 'stats.js'

import createCube from './components/create-cube'

/**
 * Debug
 */

// Debug data
const debugObject = {
    clearColor: 0x777777
}

// Dat.GUI
const gui = new dat.GUI({
    closed: false,
    width: 400
})
// gui.hide()

gui
    .addColor(debugObject, 'clearColor')
    .name('Renderer clear color')
    .onChange(() => {
        renderer.setClearColor(debugObject.clearColor)
    })

// Stats.js for Three.js
const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);


/**
 * Sizes and resizing
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true // For inertia-like effect, updated in tick! (remove if not needed)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setClearColor(debugObject.clearColor)

/**
 * Loaders
 */


/**
 * Objects
 */
createCube(scene)


/**
 * RAF loop
 */
const clock = new THREE.Clock()

const tick = () => {

    stats.begin()

    // Get time
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    stats.end()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

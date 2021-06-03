Shaders go here.

### Usage

Shader files `.(glsl|vs|fs|vert|frag)` can be simply imported using `import [shader] from [shader].[ext]`. Webpack is configured to load the file content as **plain text** and insert it straight into the JS-bundle.

Also, it is possible to use `#pragma glslify` inside the shaders. The Webpack loader will replace the #pragma with the desired code (specific dependencies like `glsl-noise` need to be installed first).

### Example

```
#pragma glslify: noise = require('glsl-noise/simplex/3d')

precision mediump float;
varying vec3 vpos;
void main () {
    gl_FragColor = vec4(noise(vpos*25.0),1);
}
```

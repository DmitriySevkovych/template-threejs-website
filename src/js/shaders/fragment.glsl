#ifndef PI
#define PI 3.14159265359
#endif

varying vec2 vUv;

void main()
{
    gl_FragColor = vec4(vUv,1.,1.);
}

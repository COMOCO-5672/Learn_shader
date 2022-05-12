varying vec2 texcorrd;

#define PI 3.1415926f
#define PIx2 2.*PI
#define PI_HALF PI/2.

#iChannel0 "file://../img/01.jpg"
#iChannel1 "file://../img/03.jpg"

void main() {
    vec2 uv=gl_FragCoord.xy/iResolution.xy;
    float sinDegree = sin(PI_HALF * iTime);
    float sinDegreeOffest = sinDegree *.1;
    
    vec4 firstColor = texture2D(iChannel0,uv);
    vec4 secondColor = texture2D(iChannel1,uv);
    gl_FragColor = firstColor;

    float alpha = 0.,beta = 0.,gamma = 0.;
    for(float offset = 0.0;offset < 2.2 ;offset += 0.2)
    {
        float tmp = -uv.x + offset;
        if(uv.y>(tmp - sinDegreeOffest)&& uv.y < (tmp + sinDegreeOffest)){
            gl_FragColor = secondColor;
        }
    }
}

import reglwebgl from "regl";

const regl = reglwebgl();

const frag = `
precision mediump float;
uniform vec4 color;

void main(void) {
  gl_FragColor = color;
}
`;

const vert = `
precision mediump float;
attribute vec2 position;

void main(void) {
  gl_Position = vec4(position, 0, 1.);
}
`;

const drawTriangle = regl({
  frag,
  vert,
  attributes: {
    position: [
      [-1, 1],
      [-1, -1],
      [1, 1],
      [1, -1],
      [1, 1],
      [-1, -1]
    ]
  },
  uniforms: {
    color: regl.prop("color")
  },
  count: 6
});

regl.frame(({time}) => {
  regl.clear({
    color: [0, 0, 0, 1],
    depth: 1
  });

  drawTriangle({
    color: [
      Math.sin(time * .1),
      Math.cos(time * .2),
      Math.sin(time * .3),
      1
    ]
  });
});




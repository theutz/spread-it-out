import chroma from "chroma-js";

export default (color, magnitude = 0.1, numberOfResults = 10) => {
  if (!color) {
    throw new Error(`'color' variable must be set!`);
  }

  const brightest = chroma(color).luminance(1 - magnitude);

  const darkest = chroma(color).luminance(magnitude);

  const scale = chroma.scale([brightest, darkest]);

  const colors = [color].concat(scale.colors(numberOfResults - 1));

  return colors;
};

const fontSizes = ["0.8em", "1em", "2em", "4em", "6em"];

const space = [0, 4, 8, 16, 24, 36, 200];

const sizes = space;

const radii = space;

const colors = {
  foreground: "#fff",
  foregroundDark: "#ccc",
  middle: "#888",
  backgroundLight: "#333",
  background: "#000",
  highlight: "#00f"
};

const borders = [
  `0`,
  `1px solid ${colors.backgroundLight}`,
  `1px solid ${colors.middle}`,
  `2px solid ${colors.foregroundDark}`,
];

export default {
  fontSizes,
  space,
  sizes,
  radii,
  colors,
  borders,
};

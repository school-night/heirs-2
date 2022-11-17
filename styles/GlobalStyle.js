import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import css from "@styled-system/css";

const fonts = `
  @font-face {
    font-family: NeueHaasGrotDisp;
    src: url("/fonts/NeueHaasGrotDisp-65Medium.otf") format("opentype");
    font-weight: 500;
    font-display: swap;
  }
`;

const fontFallback = `NeueHaasGrotDisp, Helvetica Neue, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

const global = css({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    fontFamily: `NeueHaasGrotDisp, ${fontFallback}`,
    fontSize: "12px",
    fontWeight: "500",
    backgroundColor: "background",
    color: "middle",
    textTransform: "uppercase",
  },
  "::selection": {
    color: "middle",
    backgroundColor: "backgroundLight",
  },
  body: {
    lineHeight: "130%", // maybe too much. consider 1.4
    minHeight: "100vh",
  },
  a: {
    color: "foregroundDark",
    textDecoration: "none",
    transition: "padding 0.1s, margin 0.1s",
  },
  "a:hover, a:focus-visible": {
    color: "middle",
    // outline: 0,
    // borderRadius: 1,
    // backgroundColor: "backgroundLight",
    // paddingX: 1,
    // paddingY: 1,
    // marginX: -1,
    // marginY: -1,
  },
  // "a:not(.work-grid-item):hover, a:not(.work-grid-item):focus-visible": {
  //   outline: 0,
  //   borderRadius: 1,
  //   backgroundColor: "backgroundLight",
  //   paddingX: 1,
  //   paddingY: 1,
  //   marginX: -1,
  //   marginY: -1,
  // },
  "h1, h2, h3, h4, h5, h6": {
    color: "foregroundDark",
    marginTop: 5,
    marginBottom: 3,
  },
  h1: {
    fontSize: [2, 3],
    fontWeight: "500",
    lineHeight: 1,
    paddingBottom: 4,
    borderBottom: 1,
  },
  h2: {
    fontSize: [1, 2],
    fontWeight: "500",
    lineHeight: 1,
  },
  h3: {
    fontSize: [0, 1],
    fontWeight: 500,
  },
  p: {
    marginY: 4,
  },
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  ${global}
`;

export default GlobalStyle;

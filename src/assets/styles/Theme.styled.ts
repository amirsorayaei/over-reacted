/**
 * Theme config for styled-components
 */

import { black, bright_pink, navy, pink, white } from "./Colors";

/**
 * Dark theme
 */
export const dark = {
  name: "dark-theme",
  colors: {
    bg: navy,
    textNormal: white,
    textTitle: white,
    textLink: pink,
  },
};

/**
 * Light theme
 */
export const light = {
  name: "light-theme",
  colors: {
    bg: white,
    textNormal: black,
    textTitle: black,
    textLink: bright_pink,
  },
};

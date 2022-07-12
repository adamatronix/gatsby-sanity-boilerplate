import { css } from "styled-components";

const stacks = {
  // ns = not small
  default: () =>
    css`
      font-family: "EB Garamond", Garamond, Georgia, serif;
    `,
  defaultVariable: () =>
    css`
      font-family: "EB GaramondVariable", Garamond, Georgia, serif;
    `,
  secondary: () =>
    css`
      font-family: "Founders Grotesk", Arial, sans-serif;
    `,
  traditional: () =>
    css`
      font-family: "Noto Sans TC";
    `,
};

export const fontstack = stacks;

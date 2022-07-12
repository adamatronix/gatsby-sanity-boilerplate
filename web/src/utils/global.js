import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::selection {
    background: var(--brand-grey1);
    color: var(--brand-white);
  }

  html, 
  body {
    overscroll-behavior: none;
    background: var(--brand-background);
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "EB Garamond", Garamond, Georgia, serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  :root {
    --brand-black: #000000;
    --brand-background: #EBE9E6;
    --brand-white: #ffffff;
    --brand-grey1: #363636;
    --brand-grey2: #727272;
    --brand-grey3: #B7B7B7;

    --brand-primary: var(--brand-black);
    --brand-secondary: var(--brand-white);
  }
`;

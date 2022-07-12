import { addDecorator } from "@storybook/react";
import { GlobalStyle } from '../src/utils/global';
import "../src/fonts/fonts.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
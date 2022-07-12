/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react";
import { SiteProvider } from "./src/context/site-context";

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);

import * as React from "react";
import sanityClient from "@sanity/client";

const defaultValues = {};

export const SiteContext = React.createContext(defaultValues);

export const SiteProvider = ({ children }) => {
  const client = sanityClient({
    projectId: "przmylc3",
    dataset: "production",
    apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
    token: "", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  React.useEffect(() => {}, []);

  return (
    <SiteContext.Provider
      value={{
        ...defaultValues,
        client,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

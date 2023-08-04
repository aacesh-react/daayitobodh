import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaComponent = ({
  title = "Dayitwabodh Nepal's top news website",
  description = "Nepal's top news website",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaComponent;

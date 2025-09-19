import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({
  title,
  type,
  siteName,
  url,
  keywords,
  description,
  revisitAfter,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="VM:title" content={title} />
      <meta property="VM:type" content={type} />
      <meta property="VM:site_name" content={siteName} />
      <meta property="VM:url" content={url} />
      <meta name="keywords" content={keywords} />
      <meta
        property="VM:description"
        name="description"
        content={description}
      />
      <meta name="robots" content="all" />
      <meta name="revisit-after" content={revisitAfter} />
      <meta name="copyright" content="VM Crackers" />
      <meta name="language" content="English" />
      <meta name="distribution" content="Global" />
    </Helmet>
  );
};

export default MetaTags;

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
      <meta property="MERWIN:title" content={title} />
      <meta property="MERWIN:type" content={type} />
      <meta property="MERWIN:site_name" content={siteName} />
      <meta property="MERWIN:url" content={url} />
      <meta name="keywords" content={keywords} />
      <meta
        property="MERWIN:description"
        name="description"
        content={description}
      />
      <meta name="robots" content="all" />
      <meta name="revisit-after" content={revisitAfter} />
      <meta name="copyright" content="MERWIN Crackers" />
      <meta name="language" content="English" />
      <meta name="distribution" content="Global" />
    </Helmet>
  );
};

export default MetaTags;

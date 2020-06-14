import React from "react";
import { Helmet } from "react-helmet";

const AppMetadata = () => {
  const title =
    "The Movie Mapper - Find The Best Movies From Each Country By Clicking On The Map Of The World";
  const description =
    "Click on the map of the world to find the best movies for that country.";
  const url = "https://www.themoviemapper.com/";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" content={url} />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:title"
        content={title}
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:description"
        content={description}
      />
    </Helmet>
  );
};

export default AppMetadata;

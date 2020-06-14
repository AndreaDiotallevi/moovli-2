import React from "react";
import { Helmet } from "react-helmet";

const MovieListMetadata = ({ country }) => {
  const title = `Best Movies From ${country} - The Movie Mapper`;
  const description = `The list of best movies from ${country}. Filter the movies by genre and extend your research by clicking on the movie.`;
  const url = `https://www.themoviemapper.com/${country
    .split(" ")
    .join("%20")}`;

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

export default MovieListMetadata;

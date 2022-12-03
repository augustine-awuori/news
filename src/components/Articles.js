import React from "react";

import Banner from "./Banner";
import Card from "./Card";

export default function Articles({ newsArticles, onAddFavourite, visible }) {
  if (visible)
    return (
      <section>
        {newsArticles?.map((article, index) =>
          index ? (
            <Card
              key={article.description + index}
              article={article}
              isFavorite={article.isFavorite}
              onFavoriteAdd={() => onAddFavourite(article)}
            />
          ) : (
            <Banner article={article} />
          )
        )}
      </section>
    );

  return (
    <div
      className="page home-page"
      style={{ alignSelf: "center", justifySelf: "center" }}
    >
      <p style={{ marginTop: 50, textAlign: "left" }}>Something failed!</p>
    </div>
  );
}

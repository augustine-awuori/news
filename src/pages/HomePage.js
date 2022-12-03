import React, { useState, useEffect } from "react";

import Articles from "../components/Articles";
import newsApi from "../api/news";
import TimeWidget from "../components/TimeWidget";
import useApi from "../hooks/useApi";
import useFavourites from "../hooks/useFavourites";
import WeatherWidget from "../components/WeatherWidget";

export default function HomePage() {
  const { data, error, loading, request } = useApi(newsApi.getNews);
  const { favourites, setFavourites } = useFavourites();
  const [news, setNews] = useState(data);

  useEffect(() => {
    request();
    setNews(data);
  }, []);

  const newsArticles = news?.length ? news : data;

  const updateFavourites = (article) => {
    if (article.isFavorite) setFavourites([article, ...favourites]);
    else
      setFavourites(
        favourites.filter((a) => a.urlToImage !== article.urlToImage)
      );
  };

  const handleFavourite = (article) => {
    const items = [...newsArticles];
    const index = items.findIndex((item) => item.title === article.title);
    const newArticle = { ...article };

    if (index === -1 || !items.length) return;
    newArticle.isFavorite = !newArticle.isFavorite;
    items[index] = newArticle;

    updateFavourites(newArticle.isFavorite);
    setNews(items);
  };

  if (loading)
    return <p style={{ marginTop: 50, textAlign: "center" }}>Loading...</p>;

  return (
    <div className="page home-page">
      <div className="page-element">
        <Articles
          newsArticles={newsArticles}
          onAddFavourite={handleFavourite}
          visible={!error}
        />
      </div>
      <div className="page-element">
        <TimeWidget />
        <WeatherWidget />
      </div>
    </div>
  );
}

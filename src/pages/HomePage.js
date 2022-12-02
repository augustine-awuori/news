import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import newsApi from "../api/news";
import useApi from "../hooks/useApi";
import Banner from "../components/Banner";
import TimeWidget from "../components/TimeWidget";

export default function HomePage() {
  const { data, error, loading, request } = useApi(newsApi.getNews);
  const [news, setNews] = useState(data);

  useEffect(() => {
    request();
    setNews(data);
  }, []);

  const newsArticles = news?.length ? news : data;

  const handleFavorite = (article) => {
    const items = [...newsArticles];
    const index = items.findIndex((item) => item.title === article.title);
    const newArticle = { ...article };

    if (index === -1 || !items.length) return;
    newArticle.isFavorite = !newArticle.isFavorite;
    items[index] = newArticle;

    setNews(items);
  };

  const textStyle = { marginTop: 50, textAlign: "center" };

  if (loading) return <p style={textStyle}>Loading...</p>;

  if (error)
    return (
      <div
        className="home-page"
        style={{ alignSelf: "center", justifySelf: "center" }}
      >
        <p style={textStyle}>Something failed!</p>
      </div>
    );

  return (
    <div className="home-page">
      <div className="page-element">
        {newsArticles?.map((article, index) =>
          index ? (
            <Card
              key={article.description + index}
              article={article}
              isFavorite={article.isFavorite}
              onFavoriteAdd={() => handleFavorite(article)}
            />
          ) : (
            <Banner article={article} />
          )
        )}
      </div>
      <div className="page-element">
        <TimeWidget />
      </div>
    </div>
  );
}

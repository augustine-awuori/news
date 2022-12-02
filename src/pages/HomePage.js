import React, { useEffect } from "react";

import Card from "../components/Card";
import newsApi from "../api/news";
import useApi from "../hooks/useApi";
import Banner from "../components/Banner";
import TimeWidget from "../components/TimeWidget";

export default function HomePage() {
  const { data, error, loading, request } = useApi(newsApi.getNews);

  useEffect(() => {
    request();
  }, []);

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
  console.log(data);
  return (
    <div className="home-page">
      <div className="page-element">
        {data?.articles?.map((article, index) =>
          index ? (
            <Card key={article.description} article={article} />
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

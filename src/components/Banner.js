import React from "react";

export default function Banner({ article }) {
  const { author, source, title, urlToImage, url } = article;

  return (
    <section>
      <h2 className="heading">{author}</h2>
      <article className="banner">
        <img src={urlToImage} alt="" />
        <p className="banner__title">{title}</p>
        <a href={`${url}`} className="link">
          <button className="btn">Learn More</button>
        </a>
      </article>
    </section>
  );
}

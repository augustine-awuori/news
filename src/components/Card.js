import React from "react";

export default function Card({ article }) {
  const { source, title, urlToImage, url } = article;

  return (
    <article className="card">
      <section className="card__header">
        <img src={urlToImage} alt="" className="card__image" />
      </section>
      <p className="card__title">{title}</p>
      <footer className="card__footer">
        <p className="card__footer__title">{source.name}</p>
        <a href={`${url}`} className="link">
          <button className="btn">Learn More</button>
        </a>
      </footer>
    </article>
  );
}

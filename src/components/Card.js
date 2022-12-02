import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Card({ article, onFavoriteAdd, isFavorite }) {
  const { source, title, urlToImage, url } = article;
  if (isFavorite) console.log(isFavorite);

  const style = {
    cursor: "pointer",
    position: "relative",
    left: "10px",
    bottom: "30px",
  };

  return (
    <article className="card">
      <section className="card__header">
        <img src={urlToImage} alt="" className="card__image" />
      </section>
      {isFavorite ? (
        <FaStar style={style} size={15} onClick={onFavoriteAdd} />
      ) : (
        <FaStarHalfAlt style={style} size={15} onClick={onFavoriteAdd} />
      )}
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

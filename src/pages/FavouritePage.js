import React from "react";

import Card from "../components/Card";
import useFavourites from "../hooks/useFavourites";

export default function FavouritePage() {
  const { favourites, setFavourites } = useFavourites();

  const removeFavourite = (favourite) =>
    setFavourites(favourites.filter((a) => a !== favourite));

  if (!favourites.length)
    return (
      <section className="page favourite-page">
        <p style={{ textAlign: "center" }}>You have no favourites</p>
      </section>
    );

  return (
    <section className="page">
      {favourites.map((favourite) => (
        <Card
          article={favourite}
          isFavorite={favourite.isFavorite}
          onFavoriteAdd={() => removeFavourite(favourite)}
        />
      ))}
    </section>
  );
}

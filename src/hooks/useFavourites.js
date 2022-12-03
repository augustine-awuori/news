import { useContext } from "react";

import Context from "../context/FavouritesContext";

export default function useFavourites() {
  const { favourites, setFavourites } = useContext(Context);

  return { favourites, setFavourites };
}

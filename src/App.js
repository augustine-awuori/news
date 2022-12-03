import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import FavouriteContext from "./context/FavouritesContext";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <main>
      <FavouriteContext.Provider value={{ favourites, setFavourites }}>
        <NavBar
          img={require("./assets/Profilbillede.png")}
          name="Nicolai Jacobsen"
        />
        <Routes>
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </FavouriteContext.Provider>
    </main>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <NavBar
        img={require("./assets/Profilbillede.png")}
        name="Nicolai Jacobsen"
      />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

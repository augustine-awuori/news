import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar
        img={require("./assets/Profilbillede.png")}
        name="Nicolai Jacobsen"
      />
      <HomePage />
    </>
  );
}

export default App;

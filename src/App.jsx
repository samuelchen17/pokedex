import { useState } from "react";
import Pokedex from "./components/Pokedex";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Pokedex />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Pokedex from "./components/pokedex/Pokedex";

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

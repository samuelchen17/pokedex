import { useState } from "react";
import Pokedex from "./components/pokedex/Pokedex";

function App() {
  const [region, setRegion] = useState([0, 151]);

  return (
    <>
      <Pokedex setRegion={setRegion} region={region} />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ListingBody } from "./components/ListingBody";
import { ContextProductCount } from "./services/context-product";

function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <>
      <ContextProductCount.Provider
        value={{ contextProductCount, setContextProductCount }}
      >
        <Header></Header>
        <ListingBody></ListingBody>
      </ContextProductCount.Provider>
    </>
  );
}

export default App;

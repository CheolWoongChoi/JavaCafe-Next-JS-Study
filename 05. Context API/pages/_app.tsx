import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import CartContext from "@/contexts/cartContext";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState({});

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...pageProps} />
      </div>
    </CartContext.Provider>
  );
}

export default App;

import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const[dark, isDark] =useState(false); 

  
  const appClass = dark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={e => dark?isDark(false):isDark(true)}>{dark?"Light":"Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddCategory from "./AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState([
    "One punch",
    "Samurai x",
    "Dragon Ball",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;

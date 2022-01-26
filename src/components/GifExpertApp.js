import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["One punch"]);

  //   const AddCategoryHandler = (category) => {
  //     setCategories((categories) => [...categories, category]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;

import React from "react";
import { useState } from "react";

function AddCategory() {
  const [category, setCategory] = useState("Hola");

  const handleAdd = (e) => {
    // setCategories([...categories, "Test"]);
    e.preventDefault();
    console.log(e);
  };

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form onSubmit={handleAdd}>
      <h2>AddCategory</h2>
      <input type="text" value={category} onChange={handleInputChange}></input>
    </form>
  );
}

export default AddCategory;

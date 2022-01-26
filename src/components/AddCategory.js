import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory(props) {
  const [category, setCategory] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (category.trim().length > 2) {
      props.setCategories((categories) => [category, ...categories]);
      setCategory("");
    }
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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

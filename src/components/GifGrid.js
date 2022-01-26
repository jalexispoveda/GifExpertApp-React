import React from "react";
import { useFetchGif } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h3 className="animate__fadeIn">{category}</h3>
      {loading && <p>Cargando</p>}
      <div className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;

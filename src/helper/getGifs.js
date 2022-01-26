const API_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "rCDmS0mYd2UllcNScZpv8EO5SMwJV23t";

//Como es async y retorno data, se devuelve una promesa
const getGifs = async (category) => {
  const response = await fetch(
    `${API_URL}?api_key=${API_KEY}&q=${encodeURI(category)}}&limit=10`
  );
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;

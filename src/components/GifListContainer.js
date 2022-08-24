import React, { useEffect, useState, useRef } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGif] = useState([]);
  const [query, setQuery] = useState("");
  const timer = useRef(null);
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=L5UiYwmqhJmCqe7ARupD52qXxWVn6Chq&rating=g&limit=3`
      )
        .then((res) => res.json())
        .then(({ data }) => {
          const gifs = data.map((gif) => ({ url: gif.images.original.url }));
          setGif(gifs);
        });
    }, 1000);
  }, [query]);

  return (
    <div>
      <GifList gifs={gifs} />
      <GifSearch setQuery={setQuery} query={query} />
    </div>
  );
}

export default GifListContainer;

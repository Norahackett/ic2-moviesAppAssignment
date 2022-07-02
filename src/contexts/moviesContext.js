import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatches, setmustWatches] = useState([]); 
  

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const addToMustWatches = (movie) => {
    if (!mustWatches.includes(movie.id)) {
      let newMustWatches = [...mustWatches, movie.id];
      setmustWatches(newMustWatches);
    }
  };

  const removeFromMustWatches = (movie) => {
    setmustWatches(mustWatches.filter((mId) => mId !== movie.id));
  };


  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatches,
        addToMustWatches,
        removeFromMustWatches,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
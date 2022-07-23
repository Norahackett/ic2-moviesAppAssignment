import React, { useState } from "react";

export const TvSeriesContext = React.createContext(null);

const TvSeriesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
 
  

  const addToFavourites = (tv) => {
    if (!favourites.includes(tv.id)) {
      let newFavourites = [...favourites, tv.id];
      setFavourites(newFavourites);
    }
  };

  

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter((mId) => mId !== tv.id));
  };

  
 

  return (
    <TvSeriesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </TvSeriesContext.Provider>
  );
};

export default TvSeriesContextProvider;
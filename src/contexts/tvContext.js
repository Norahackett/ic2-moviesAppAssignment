import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
   
  

  const addToFavourites = (tv) => {
    if (!favourites.includes(tv.id)) {
      let newFavourites = [...favourites, tv.id];
      setFavourites(newFavourites);
    }
  };

 

  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites(favourites.filter((tvId) => tvId !== tv.id));
  };


  return (
    <TvContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;
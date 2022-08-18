import React, { useContext } from "react";
//import { MoviesContext } from "../../contexts/moviesContext";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavouritesIcon = ({ tv }) => {
  const context = useContext(TvContext);
  //const context2 = useContext(TvContext);
  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};


export default AddToFavouritesIcon;
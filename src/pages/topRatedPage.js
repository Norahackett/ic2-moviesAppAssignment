import React from "react";  // useState/useEffect redundant 
import PageTemplate from '../components/templateMustWatch';
import { getTopRated} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const TopRatedMoviesPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('top_rated', getTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  //const AddToMustWatchIcon = () => null;
  
  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      />
    );
  };

export default TopRatedMoviesPage;
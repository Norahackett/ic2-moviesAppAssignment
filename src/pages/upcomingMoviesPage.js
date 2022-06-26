import React from "react";  // useState/useEffect redundant 
import PageTemplate from '../components/templateMovieListPage';
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const UpcomingMoviesPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const AddToFavouritesIcon = () => null;
  
  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      />
    );
  };

export default UpcomingMoviesPage;




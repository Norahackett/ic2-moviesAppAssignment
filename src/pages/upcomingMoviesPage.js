import React from "react";  // useState/useEffect redundant 
import PageTemplate from '../components/templateMovieListPage';
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


const UpcomingMoviesPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

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
        return <AddToPlaylistIcon movie={movie} />
      }}
      />
    );
  };

export default UpcomingMoviesPage;




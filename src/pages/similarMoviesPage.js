import React from "react";
import { useParams } from "react-router-dom";
//import PageTemplate from "../components/templateMovieListPage";
//import useMovie from "../hooks/useMovie";
import {  getSimilar } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMustWatch';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const SimilarMoviesPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getSimilar
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  //const AddToMustWatchIcon = () => null;
  
  return (
    <PageTemplate
      title='Similar Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      />
    );
  };
   

export default SimilarMoviesPage;




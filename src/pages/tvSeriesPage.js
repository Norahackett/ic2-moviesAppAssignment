import React from "react";
import PageTemplate from "../components/templateTvSeriesListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvSeries} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const TvSeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getTvSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvseries = data.results;

  // These three lines are redundant; we will replace them laterg.
  //const favourites = tvseries.filter(m => m.favouurite)
  //localStorage.setItem('favourites', JSON.stringify(favourites))
  //const addToFavourites = (tvId) => true 

  return (
    <PageTemplate
      title="Discover TV"
      tvseries={tvseries}
      action={(tv) => {
        return <AddToFavouritesIcon tv={tv} />
      }}
    />
  );
};

export default TvSeriesPage;
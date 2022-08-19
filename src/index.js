import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW#
import FavouriteTvPage from "./pages/favouriteTvPage"; // NEW#
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; // NEW#
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TvContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchMoviesPage from './pages/mustWatchMoviesPage';
import TopRatedMoviesPage from './pages/topRatedPage';
import TvSeriesPage from './pages/tvSeriesPage';
import TvPage from './pages/tvDetailsPage';
import TvReviewPage from "./pages/tvReviewPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import AddTvReviewPage from './pages/addTvReviewPage';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader /> 
      <TvContextProvider>
      <MoviesContextProvider>
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
        <Route path="/tv/favourites" element={<FavouriteTvPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}/>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/must_watches" element={<MustWatchMoviesPage/>}/>
        <Route path="/movies/top_rated" element={<TopRatedMoviesPage/>}/>
        <Route path="/similarmovies/:id/" element={<SimilarMoviesPage/>} />
        <Route path="/tvreviews/:id" element={<TvReviewPage/>} />
      <Route path="/tv/tv_series" element={<TvSeriesPage/>}
        />
        <Route path="/tv/:id" element={<TvPage/>} />
        <Route path="/tvreviews/form" element={<AddTvReviewPage/>} />
      </Routes>
      </MoviesContextProvider>
      </TvContextProvider>
    </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
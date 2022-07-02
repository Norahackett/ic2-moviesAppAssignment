import React from "react";
import MovieMustWatch from "../components/movieMustWatch";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

export default {
  title: "Home Page/movieMustWatc",
  component: MovieMustWatch,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieMustWatch
      movie={SampleMovie}
      action={(movie) => <AddToMustWatchIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieMustWatch
      movie={sampleNoPoster}
      action={(movie) => <AddToMustWatchIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
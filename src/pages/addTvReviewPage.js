import React from "react";
import PageTemplate from "../components/templateTvPage";
import ReviewForm from "../components/reviewTvForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const location = useLocation()
  const { tvId } = location.state;
  const { data: tv, error, isLoading, isError } = useQuery(
    ["movie", { id: tvId }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate tv={tv}>
      <ReviewForm tv={tv} />
    </PageTemplate>
  );
};

export default WriteReviewPage;
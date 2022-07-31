import React from "react";

const MovieSimiar =  ({ similar }) => {
  return (
    <>
      <p>Review By: {similar.overview} </p>
      <p>{similar.overview} </p>
    </>
  );
};
export default MovieSimiar
import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ tv }) => {
  return (
    <Link
      to={'/tvreviews/form'}
      state={{
          tvId: tv.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
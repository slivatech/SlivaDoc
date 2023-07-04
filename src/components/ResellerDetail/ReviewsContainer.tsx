import React, { useState, useEffect, useMemo } from "react";
import { ReviewsContainerStyled } from "./ResellerDetailStyled";
import Review from "./Review";
import { Review as ReviewProps } from "../../types/typings";

interface Props {
  filterByRating: number[];
  showMedia: boolean;
  sortBy: string;
  reviews: ReviewProps[];
}

const ReviewsContainer: React.FC<Props> = ({
  filterByRating,
  showMedia,
  sortBy,
  reviews,
}) => {
  const handleFilter = () => {
    if (filterByRating.length === 0 && !showMedia) {
      return reviews;
    }

    return reviews.filter((review) => {
      const ratingMatches = filterByRating.includes(review.productRating);
      const mediaMatches = showMedia && review.media;

      return ratingMatches || mediaMatches;
    });
  };

  const [filteredReviews, setFilteredReviews] = useState<ReviewProps[]>([]);

  useEffect(() => {
    const filteredValues = handleFilter();
    setFilteredReviews(filteredValues);
  }, [filterByRating, showMedia, reviews]);

  const renderSortedReviews = useMemo(() => {
    const sortedReviews = [...filteredReviews];

    if (sortBy === "Terbaru") {
      sortedReviews.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    }

    return sortedReviews.map((review, i) => <Review review={review} key={i} />);
  }, [sortBy, filteredReviews]);

  return (
    <ReviewsContainerStyled>
      <div className="reviews">{renderSortedReviews}</div>
    </ReviewsContainerStyled>
  );
};

export default ReviewsContainer;

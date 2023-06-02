import React, { useState, useEffect, useMemo } from "react";
import { ReviewsContainerStyled } from "./ResellerDetailStyled";
import Review from "./Review";
import {  Review as ReviewProps } from "../../types/typings";

interface Props {
  filterByRating: number[];
  showMedia: boolean;
  sortBy: string;
  reviews:ReviewProps[];
}
const ReviewsContainer: React.FC<Props> = ({
  filterByRating,
  showMedia,
  sortBy,
  reviews
}) => {
  const [filteredReviews, setFilteredReviews] =
    useState<ReviewProps[]>(reviews);

  useEffect(() => {
    const filteredValues = handleFilter();
    setFilteredReviews(filteredValues);
  }, [filterByRating, showMedia]);

  const handleFilter = () => {
    if (filterByRating.length === 0 && !showMedia) return reviews;
    return reviews.filter((review) => {
      const ratingMatches = filterByRating.includes(review.productRating);

      const mediaMatches = showMedia && review.media;
      console.log(ratingMatches, mediaMatches);
      return ratingMatches || mediaMatches;
    });
  };

  const renderSortedReviews = useMemo(() => {
    if (sortBy === "Terbaru")
      return (
        <>
          {filteredReviews.sort((a,b)=>a.createdAt > b.createdAt ? -1 :1 ).map((review, i) => (
            <Review review={review} key={i} />
          ))}
        </>
      );

    return (
      <>
        {filteredReviews.map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </>
    );
  }, [sortBy,filteredReviews]);

  return (
    <ReviewsContainerStyled>
      <div className="reviews">
        {/* {filterByRating.length !== 0  ? (
          <>
     
            {reviews
              .filter((review) => filterByRating.includes(review.productRating))
              .map((review, i) => (
                <Review review={review} key={i} />
              ))}
          </>
        ) : (
          <>
            {reviews.map((review) => (
              <Review review={review} />
            ))}
          </>
        )} */}
        {renderSortedReviews}
        {/* {filteredReviews.map((review, i) => (
          <Review review={review} key={i} />
        ))} */}
      </div>
    </ReviewsContainerStyled>
  );
};

export default ReviewsContainer;

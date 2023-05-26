import React from "react";
import {
  RatingWrapper,
  ReviewContent,
  ReviewFilter,
  ReviewSidebar,
  ReviewWrapper,
} from "./ResellerDetailStyled";
import { ratingList } from "./fakeData";

const ResellerReviewTab = () => {
  const reviewArray = [5, 4, 3, 2, 1];
  const descriptionValues = [
    "Kualitas Produk",
    "Pelayanan Penjual",
    "Sesuai Deskripsi",
    "Pengiriman",
  ];
  return (
    <ReviewWrapper>
      <ReviewSidebar>
        <div className="sidebar-wrapper">
          <div className="main-rating">
            <div className="rating-text">
              <i className="fa-solid fa-star"></i>
              <h1>
                <span>5.0</span> / 5.0
              </h1>
            </div>

            <div className="secondary">
              <p className="sub">100% Pembeli merasa puas</p>
              <div className="qty">
                <span>98 Rating</span>
                <div className="dot"></div>
                <span>5 Ulasan</span>
              </div>
            </div>
          </div>

          <div className="rating-list">
            {ratingList.map((value, i) => (
              <RatingWrapper>
                <i className="fa-solid fa-star"></i>
                <span className="rating-number">{value.rating}</span>
                <input
                  className="slider"
                  type="range"
                  min={0}
                  max={value.ratingCount}
                  value={value.ratingCount}
                />
                <span className="rating-count">{value.ratingCount}</span>
              </RatingWrapper>
            ))}
          </div>
          <ReviewFilter>
            <header>Filter Ulasan</header>
            <div className="media">
              <p className="filter-header">Media</p>
              <div className="checkbox">
                <input value={"media"} type="checkbox" />
                <label>Dengan Foto & Video</label>
              </div>
            </div>
            <div className="filter-by-rating">
              <p className="filter-header">Rating</p>
              <div className="checkbox-list">
                {reviewArray.map((rating, i) => (
                  <div className="checkbox" key={i}>
                    <input value={"media"} type="checkbox" />
                    <div>
                      <i className="fa-solid fa-star"></i>
                      <label style={{ marginLeft: ".5rem" }}>{rating}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="filter-by-description">
              <p className="filter-header">Rating</p>
              <div className="checkbox-list">
                {descriptionValues.map((rating, i) => (
                  <div className="checkbox" key={i}>
                    <input value={"media"} type="checkbox" />
                    <label >{rating}</label>
                  </div>
                ))}
              </div>
            </div>
          </ReviewFilter>
        </div>
      </ReviewSidebar>
      <ReviewContent>dsds</ReviewContent>
    </ReviewWrapper>
  );
};

export default ResellerReviewTab;

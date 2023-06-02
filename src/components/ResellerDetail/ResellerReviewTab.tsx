import {
  RatingWrapper,
  ReviewContent,
  ReviewFilter,
  ReviewSidebar,
  ReviewWrapper,
  ShowMoreBtn,
} from "./ResellerDetailStyled";
import { ratingList, reviews } from "./fakeData";
import Select from "../Select/Select";
import ReviewsContainer from "./ReviewsContainer";
import { useState } from "react";

const ResellerReviewTab = () => {
  const reviewArray = [5, 4, 3, 2, 1];
  const descriptionValues = [
    "Kualitas Produk",
    "Pelayanan Penjual",
    "Sesuai Deskripsi",
    "Pengiriman",
  ];

  const [_rating, setRating] = useState<number[]>([]);
  const[isMediaChecked,setIsMediaChecked] = useState<boolean>(false);
 
  console.log(_rating);

  const handleAddRating = (rating: number) => {
    if (_rating.includes(rating)) {
      return setRating((cur) => cur.filter((r) => r !== rating));
    } 
    setRating([..._rating, rating]);

  };

  const[sortBy,setSortBy] = useState("Terbaru")

  const handleSortBy = (value:string) => {
    setSortBy(value)
  }
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
                <span>{reviews.length} Ulasan</span>
              </div>
            </div>
          </div>

          <div className="rating-list">
            {ratingList.map((value, i) => (
              <RatingWrapper key={i}>
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
                <input  onChange={()=>setIsMediaChecked(!isMediaChecked)} type="checkbox" />
                <label>Dengan Foto & Video</label>
              </div>
            </div>
            <div className="filter-by-rating">
              <p className="filter-header">Rating</p>
              <div className="checkbox-list">
                {reviewArray.map((rating, i) => (
                  <div className="checkbox" key={i}>
                    <input
                      value={rating}
                      onChange={(e) => handleAddRating(Number(e.target.value))}
                      type="checkbox"
                    />
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
                    <label>{rating}</label>
                  </div>
                ))}
              </div>
            </div>
          </ReviewFilter>
        </div>
      </ReviewSidebar>
      <ReviewContent>
        <header className="review-header">
          <p className="title">Ulasan pilihan</p>
          <div className="sort-filter">
            <p className="sort-text">Urutkan</p>
            <Select
              label="Terbaru"
              border="1px solid black"
              radius="5px"
              padding=".5rem"
              iconEnd={<i className="fa-solid fa-chevron-down"></i>}
              onChange={handleSortBy}
              values={["Terbaru", "Paling relevan"]}
            />
          </div>
        </header>
        <ReviewsContainer reviews={reviews} sortBy={sortBy} filterByRating={_rating} showMedia={isMediaChecked} />
        <ShowMoreBtn>Lihat Selengkapnya</ShowMoreBtn>
      </ReviewContent>
    </ReviewWrapper>
  );
};

export default ResellerReviewTab;

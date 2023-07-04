import moment from "moment";
import { Review as IReview } from "../../types/typings";
import { ReviewStyled } from "./ResellerDetailStyled";
import { useState } from "react";
import Reply from "./Reply";

interface ReviewProps {
  review: IReview;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  const [showReplies, setShowReplies] = useState<boolean>(false);
  return (
    <ReviewStyled>
      <div className="product-wrapper">
        <img className="product-image" src={review.productImage} alt="product"/>
        <div className="product-content-wrapper">
          <div className="product-content">
            <h2 className="product-name">{review.productName}</h2>
            <div className="rating-section">
              <div className="stars">
                {[...new Array(review.productRating)].map((_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
              <p>{moment(review.createdAt).fromNow()}</p>
            </div>
          </div>
          <div className="review-wrapper">
            <img src={review.buyerImage} alt="buyer"/>
            <div className="buyer-review">
              <p className="buyer-name">{review.buyerName}</p>
              {review.media ? <img  width={"100%"} src={review.media} alt="media"/> : null}
              <p>{review.reviewContent}</p>
              <div className="details">
                <div className="satisfaction">
                  <img src="/assets/thumbs-up.svg" alt="thumbs"/>
                  <p>{review.satisfaction}</p>
                </div>
                <button
                  onClick={() => setShowReplies(!showReplies)}
                  className="reply-btn"
                >
                  <span>Lihat Balasan</span>
                  <i
                    className={`fa-solid fa-chevron-down ${
                      showReplies ? "rotate" : "origin"
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
          {showReplies ? (
            <div className="replies-wrapper">
              {review.replies.map((reply, i) => (
                <Reply reply={reply} key={i}></Reply>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </ReviewStyled>
  );
};

export default Review;

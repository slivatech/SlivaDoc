import React, { FC } from "react";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import { OfferCarousel, OfferImage, StyledOffer } from "./OfferStyle";

const OfferSection: FC = () => {
  return (
    <StyledOffer>
      <h1>Penawaran Menarik</h1>
      <GroupButtons>
        <Button
          color="white"
          text="Semua"
          bgColor="linear-gradient(360deg, rgba(146,172,210,1) 21%, rgba(235,235,235,1) 100%);"
        />
        <Button
          color="white"
          text="Promo"
          bgColor="linear-gradient(360deg, rgba(146,172,210,1) 21%, rgba(235,235,235,1) 100%);"
        />
        <Button
          color="white"
          text="Kerjasama"
          bgColor="linear-gradient(360deg, rgba(146,172,210,1) 21%, rgba(235,235,235,1) 100%);"
        />
      </GroupButtons>
      <OfferCarousel>
        <OfferImage src="https://images.unsplash.com/photo-1679000631940-4fab43b817d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <OfferImage src="https://images.unsplash.com/photo-1679000631940-4fab43b817d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <OfferImage src="https://images.unsplash.com/photo-1679000631940-4fab43b817d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      </OfferCarousel>
    </StyledOffer>
  );
};

export default OfferSection;

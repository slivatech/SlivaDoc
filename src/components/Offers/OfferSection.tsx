import React, { FC } from "react";
import Button from "../Button/Button";
import { StyledH3 } from "../FontStyle/Font";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import { OfferCarousel, OfferImage, StyledOffer } from "./OfferStyle";

const OfferSection: FC = () => {
  let active = true;
  return (
    <StyledOffer>
      <StyledH3>Penawaran Menarik</StyledH3>
      <GroupButtons>
        <Button
          // color="white"
          text="Semua"
          active={true}
        />
        <Button
          // color="black"
          text="Promo"
          active={false}
        />
        <Button
          // color="black"
          text="Kerjasama"
          active={false}
        />
      </GroupButtons>
      <OfferCarousel>
        <OfferImage src="/promo-banner.png" />
        <OfferImage src="/ig-banner.png" />

        <OfferImage src="/promo-banner.png" />
      </OfferCarousel>
    </StyledOffer>
  );
};

export default OfferSection;

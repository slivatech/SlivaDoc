import React from "react";
import styled from "styled-components";

type SponsorProps = {
  images: string[];
};

const SponsorContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const SponsorImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Sponsor: React.FC<SponsorProps> = ({ images }) => {
  return (
    <SponsorContainer>
      {images.map((image, index) => (
        <SponsorImage key={index} src={image} alt={`Sponsor ${index}`} />
      ))}
    </SponsorContainer>
  );
};

export default Sponsor;

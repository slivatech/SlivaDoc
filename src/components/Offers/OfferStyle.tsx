import styled from "styled-components";
import { Container } from "../Container";

export const StyledOffer = styled(Container)`
  padding: 2rem 8%;
`;

export const OfferCarousel = styled.div`
  display: grid;
  gap: 1rem;
  place-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const OfferImage = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 202px;
  object-fit: cover;
`;

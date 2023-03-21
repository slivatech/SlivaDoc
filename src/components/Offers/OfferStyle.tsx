import styled from "styled-components";
import { Container } from "../Container";

export const StyledOffer = styled(Container)`
  padding: 2rem 1rem;


`;



export const OfferCarousel = styled.div`
    display:grid;
    gap:1rem;
    place-items: center;
    margin-top: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );

`

export const OfferImage = styled.img`
    border-radius: 10px;
    max-height:300px;
    width:100%;
    object-fit: cover;
`
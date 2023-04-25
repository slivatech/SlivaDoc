import styled from "styled-components";
import { Container } from "../Container";

export const StyledAbout = styled(Container)`
  display: flex;
  padding: 3rem 8%;

  gap: 2rem;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0.5rem 5%;
  }
`;

export const HeroImageWrapper = styled.div`
  @media (max-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
  max-width: 1000px;
`;

import styled from "styled-components";
import { Container } from "../Container";

export const StyledAbout = styled(Container)`
  display: flex;
  padding: 2rem 1rem;
  gap: 2rem;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

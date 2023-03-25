import styled from "styled-components";
import { Container } from "../Container";

export const ServiceStyle = styled(Container)`
  padding: 2rem 8%;

  row-gap: 1rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  gap: 1rem;

  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceButton = styled.button`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 10px;
`;

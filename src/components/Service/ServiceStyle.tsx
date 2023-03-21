import styled from "styled-components";
import { Container } from "../Container";

export const ServiceStyle = styled(Container)`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ServiceGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  border-radius:10px;
  
`;

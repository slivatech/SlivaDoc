import styled from "styled-components";

export const GridRow = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  position: relative;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

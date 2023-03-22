import styled from "styled-components";

export const GridRow = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 2rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  gap:1rem;
`;

import styled from "styled-components";

export const GroupButtons = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-top: 1rem;
  gap:1rem;
  @media (max-width: 1024px) {
    overflow-x: scroll;
  }
  &::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
`;

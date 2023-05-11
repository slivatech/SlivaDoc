import styled from "styled-components";

export const StyledHeroClinic = styled.section`
  display: flex;
  gap: 1rem;
  padding: 2rem 8%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .interiorImg {
    object-fit: cover;
    flex: 0.5;
    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
  /* align-items: center; */
  /* img {
    align-self: center;
  } */

  .location {
    display: flex;
    gap: 1rem;
  }

  .locationImg {
    width: 20%;
    max-height: 140px;
    cursor: pointer;
  }
`;

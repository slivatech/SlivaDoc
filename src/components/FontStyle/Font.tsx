import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: clamp(1.25rem, 5vw, 2rem);
`;

export const StyledH3 = styled.h3`
  font-size: clamp(.9rem, 3vw, 1.5rem);
  font-weight: ${(props) => props.theme.fontWeights.bold};

`;

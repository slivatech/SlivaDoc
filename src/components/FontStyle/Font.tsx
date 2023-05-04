import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: clamp(1.75rem, 5vw, 2rem);
`;

export const StyledH3 = styled.h3`
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

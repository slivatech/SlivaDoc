import styled from "styled-components";

export const AvatarStyled = styled.img<{ size: number }>(
  ({ size }) => `
    border-radius:100%;
    height:${size}px;
    width:${size}px;
    object-fit:cover;
`
);

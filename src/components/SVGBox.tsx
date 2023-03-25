import styled from "styled-components";

export const SVGBox = styled.button(
  ({ theme }) => `
    border-radius:10px;
    cursor:pointer;
    border:none;
    padding:1rem 2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    row-gap:.5rem;
    font-size:clamp(14px,2vw,20px);
    color:${theme.colors.txtPrimary};
    background:#E3E8EF;
    
    & > img {
        max-width:75px;
        max-height:75px;
    }

    @media (max-width:500px) {
    & > img {
        max-width:40px;
        max-height:40px;
    }
    padding:10% .5rem;

    }
     
  `
);

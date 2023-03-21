import styled from "styled-components";

export const SVGBox = styled.div(
    ({ theme }) => `
        border-radius:10px;
      padding:1rem 2rem;
      display:flex;
      flex-direction:column;
      align-items:center;
      border-radius:10px;
      row-gap:.5rem;
      font-size:1.25rem;
      color:${theme.colors.txtPrimary};
      background:#E3E8EF
  `
  );
  
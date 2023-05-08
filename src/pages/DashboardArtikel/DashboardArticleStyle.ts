import styled from "styled-components";

export const ImageColumn = styled.img`
  width: 79px;
  height: 31px;
  object-fit: cover;
  border-radius: 3px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;

    h5 {
        font-weight: 500;
        font-size: 18px;
        color: #06152B;
        opacity: 0.7;
    }

    .table {
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }

    .chart {
        width: 30%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }
`;
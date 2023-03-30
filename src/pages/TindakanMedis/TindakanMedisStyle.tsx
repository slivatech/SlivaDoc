import styled from "styled-components";
import doctor from '../../assets/image/doctor-cover.jpg'
import { Link } from "react-router-dom";

export const CardDoc = styled.div`
    background-image: url(${doctor});
    background-size: cover;
    height: 124px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    
    div {
        box-sizing: border-box;
        border: 0.5px solid rgba(0, 0, 0, 0.3);
        background: rgba(255, 255, 255, 0.7);
        width: 100%;
        height: 124px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`
export const CardMed = styled.div`
    ul {
        position: relative;
        bottom: 5px;
        list-style: none;
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        padding: 10px 15px;
        background: #FFFFFF;
        border: 0.5px solid rgba(153, 146, 146, 0.7);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 0px 0px 5px 5px;
    }

`

export const SeeAll = styled(Link)`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 2px;
    color: rgba(28, 28, 28, 0.7);
    text-decoration: none;
`
export const Col = styled.div`
  display: grid;
  margin-top: 10px;
  margin-bottom: 34px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.75rem 2.5rem;
`;
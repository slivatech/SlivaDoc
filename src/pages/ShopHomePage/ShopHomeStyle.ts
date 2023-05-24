import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 43px;
  padding: 15px 8%;
`;
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    p{
        font-style: italic;
        font-weight: 400;
        font-size: 20px;
        line-height: 22px;
        margin-right: 9px;
    }
`;

export const Logo = styled.div`
    h1{
        font-weight: 700;
        font-size: 30px;
        line-height: 22px;
        color: #1C1C1C;
    }
    span{
        color: #2335D4;
        font-style: italic;
    }
`;

export const SeeAll = styled(Link)`
    color: #2335D4;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`;

export const CardCategory = styled.div`
    min-height: 169px;
    background: #FFFFFF;
    border: 0.3px solid #CEEAF0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 7px 9px;

    img {
        width: 100%;
        object-fit: cover;
    }

    h6 {
        font-weight: 700;
        font-size: 12px;
        line-height: 22px;
        color: #2335D4;
        text-align: center;
    }
`;

export const Col = styled.div<{column: string, gap: string}>(
    ({column, gap}) => 
`
    width: 100%;
    display: grid;
    grid-template-columns: ${column ? `repeat(${column}, minmax(0, 1fr))`: 'repeat(auto-fit, minmax(125px, 1fr))'};
    gap: ${gap ? `${gap}`: '1rem'}
`);

export const CountdownContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 43px;
    .countdown-wrap {
        display: flex;
        align-items: center;
    }
    .name-promo{
        display: flex;
        flex-direction: column;
        h3{
            font-weight: 700;
            font-size: 20px;
            line-height: 22px;
            color: #1C1C1C;
            font-style: italic;
        }
        h1{
            margin-top:12px;
            font-weight: 700;
            font-size: 30px;
            line-height: 22px;
            color: #1C1C1C;
        }
        span{
            color: #2335D4;
            font-style: italic;
        }
    }
`;

export const WrapContainer = styled.div`
    background: #CEEAF0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 25px 35px;
    .absolute-wrap {
        position: absolute;
        left: 14%;
        top: 7%;
        z-index: 10;
        width: -webkit-fill-available;
    }
    
`;

export const Backdrop = styled.div`
    width: 189px;
    height: 277px;
    background: #2335D4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px 10px 10px 2px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 13px;
    padding-left: 28.88px;
    h1 {
        font-size: 20px;
        line-height: 22px;
        color: #1FC7FC;
    }
    span{
        color: #fff;
        font-style: italic;
    }
    .text-vertical{
        text-transform: uppercase;
        writing-mode: vertical-lr;
        text-orientation: upright;
        h2 {
            font-size: 16px;
            line-height: 18px;
            color: #1FC7FC;
            margin-right: 5px;
        }
        h3 {
            color: #fff;
            font-size: 12px;
            line-height: 14px;
        }
        
    }
`;

export const CardProduct = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #CEEAF0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    min-height: 222px;
    img {
        width: 100%;
        object-fit: cover;
        height: 106px;
        margin: 18px 4px 21px;
    }
    h3 {
        font-weight: 700;
        font-size: 12px;
        line-height: 22px;
        color: #2335D4;
    }

    .product-text {
        margin: 8px 13px; 
    }

    .product-info{
        border-top: 0.5px solid #625757;
        color: #2335D4;
        h1 {
            font-weight: 400;
            font-size: 6px;
            line-height: 15px;
        }
        span {
            font-weight: 700;
        }
        h6 {
            font-size: 6px;
            line-height: 15px;
            font-weight: 700;
        }
    }
    
`

export const PriceDiscount = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    .hidden {
        visibility: hidden;
    }
    h2 {
        background: #C5EFF1;
        border-radius: 2px;
        font-weight: 700;
        font-size: 6px;
        line-height: 10px;
        color: #2335D4;
        padding: 2px 3px;
        text-align: center;
    }

    h1 {
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: #2335D4;
        text-decoration: line-through #695C5C;
    }
`
export const RecomendContainer = styled.div`
    padding-bottom: 45px;
    .title {
        width: 100%;
        background: #CEEAF0;
        border: 1px solid #CEEAF0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        padding: 28px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 26px;
        line-height: 22px;
        margin-bottom: 36px;
    }

    .btn {
        width: 100%;
        margin-top: 32px;
        text-align: center;

        button {
            background: #eef2f6;
            box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 8px 15px;
            border: none;
            font-weight: 500;
            font-size: 16px;
        }
    }
`
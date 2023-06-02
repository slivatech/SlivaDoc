import { Link } from "react-router-dom";
import styled from "styled-components";

type ColumnProps = {
    column?: string;
    gap: string, 
    sGap: string, 
    sColumn?: string, 
    flow?: string
}

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 43px;
  padding: 15px 8%;
  @media(max-width: 720px) {
    padding: 0;
    margin: 0;
    row-gap: 13px;
  }

  .p-1 {
    @media(max-width: 720px) {
       padding: 0 5%; 
    }
  }
`

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
        @media (max-width: 720px) {
            font-weight: 700;
            font-size: 8px; 
        }

    }
`;

export const Logo = styled.div`
    h1{
        font-weight: 700;
        font-size: 30px;
        line-height: 22px;
        color: #1C1C1C;
        @media (max-width: 720px) {
            font-size: 11px;
        }
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
    @media (max-width: 720px) {
        font-size: 8px; 
    }
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
    @media (max-width: 720px) {
        min-height: 92px;
        h6 {
            font-size: 7px;
        }
    }
`;

export const Col = styled.div<ColumnProps>(
    ({column, gap, sGap, sColumn, flow}) => 
`
    width: 100%;
    display: grid;
    grid-template-columns: ${column ? `repeat(${column}, minmax(0, 1fr))`: 'repeat(auto-fit, minmax(125px, 1fr))'};
    gap: ${gap ? `${gap}`: '1rem'};
    @media (max-width: 720px) {
        gap: ${sGap ? `${sGap}`: '1rem'};
        grid-template-columns: ${sColumn ? `repeat(auto-fill,minmax(${sColumn},1fr))`: 'repeat(auto-fill, minmax(125px, 1fr))'};
        grid-auto-flow: ${flow ? `${flow}`: 'dense'};
        grid-auto-columns: ${sColumn ? `minmax(${sColumn},1fr)`: 'minmax(90px,1fr)'} ;
        overflow-x: scroll;
    }
    ::-webkit-scrollbar {
        display: none;

`);

export const CountdownContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 43px;
    flex-direction: row;
    align-items: center;
    gap: 66px;
    
    .countdown-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    @media(max-width: 720px) {
        flex-direction: column;
        align-items: start;
        gap: 4px;
        margin-bottom: 8px;
        .name-promo {
            flex-direction: row;
            gap: 4px;
            h3 {
                font-size: 10px;
            }
            h1 {
                font-size: 11px;
                margin-top: 0px;
            }
        }
        span {
            font-size: 8px;
        }
    }
`;

export const WrapContainer = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 25px 35px;
    background: #CEEAF0;
    .wrap-card {
        position: relative;
        background: #CEEAF0;
        width: 100%;
    }
    .absolute-wrap {
        position: absolute;
        left: 14%;
        top: 8%;
        z-index: 10;
        width: -webkit-fill-available;
    }
    @media(max-width: 720px) {
        box-shadow: none;  
        background: #fff;
        padding: 0;
        .wrap-card {
            padding: 13px 18px;
        }
        .absolute-wrap {
            left: 25%;
        }

    }
    
`;

export const BackdropImg = styled.img`
    width: 189px;
    height: 277px;
    object-fit: cover;
    @media(max-width: 720px) {
        width: 121px;
        height: 169px;
    }
`


export const CardProduct = styled.div`
    background: #FFFFFF;
    border: 0.3px solid #CEEAF0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    min-height: 222px;
    line-height: 22px;
    color: #2335D4;
    padding: 1rem 4px 8px;
    img {
        width: 100%;
        object-fit: cover;
        height: 106px;
         
    }
    h1 {
        font-weight: 400;
        font-size: 12px;
    }
    h3 {
        font-weight: 700;
        font-size: 12px; 
    }
    .product-text {
        margin: 6px 10px; 
    }
    .hide {
        display: none;
    }
    .product-info{
        border-top: 0.5px solid #625757;
        color: #2335D4;
        line-height: 9px;
        h1 {
            font-weight: 400;
            font-size: 6px;
            
        }
        span {
            font-weight: 700;
        }
        h6 {
            font-size: 6px;
            font-weight: 700;
        }
    }
    @media (max-width: 720px) {
        min-height: 156px;
        line-height: 10px;
        img {
            height: 71px;
            width: 100%;
        }
        h1,h3 {
            font-size: 8px;
        }
        .product-text {
            margin: 4px; 
        }
        .product-info{
            line-height: 6px;
            h1,h6 {
                font-size: 4px;
            }
        }
        
    }
    
`

export const PriceDiscount = styled.span`
    display: flex;
    flex-direction: row;
    column-gap: 4px;
    
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
    @media(max-width: 720px) {
        h2 {
            padding: 1px;
        }
        h1 {
            font-size: 6px;
            line-height: 10px;
        }
    }
`
export const RecomText = styled.div`
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
    @media(max-width: 720px) {
        font-size: 10px;
        padding: 12px;
        margin-bottom: 0;
    }
`

export const RecomendContainer = styled.div`
    padding-bottom: 45px;

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

export const SliderContainer= styled.div`
    width: 100%;
    height: 365px;
    @media(max-width: 720px) {
        height: 117px;
    }
`

export const SwiperImg = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SliderTop = styled.div`
    display: flex;
    width: 100%;
    height: 306px;
    gap: 10px;
    padding-top: 30px;
    .slider-navigation {
       width: 60%;
       height: 100%;
       opacity: 1;
       @media(max-width: 720px) {
            width: 100%;
            opacity: 0.5;
        }
    }
    .slider-row {
        width: 40%;
        height: 100%;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        gap: 10px;
        @media(max-width: 720px) {
            display: none;
        }
    }
`;

export const DoubleBanner = styled.div`
    display: flex;
    width: 100%;
    height: 127px;
    gap: 12px;
    .ads-column {
        width: 60%;
    }
    .ads-column:last-child {
        width: 40%;
    }
    @media(max-width: 720px) {
        height: 74px;
        gap: 6px;
    }
`

export const BestSeller = styled.section`
    padding-bottom: 39px;
    border-bottom: 1.5px solid #E0E0E0;
    .best-seller-title {
        display: block;
        h2 {
            font-style: italic;
            text-transform: uppercase;
            font-size: 20px;
        }
    }
    @media(max-width: 720px) {
        .best-seller-title {
            display: flex;
            align-items: center;
            gap: 4px;
            h2 {
                font-size: 10px;
            }
        }
        
`

import styled from "styled-components";
import doctor from '../../assets/image/doctor-cover.jpg'
import imgLoc from '../../assets/image/img-location.png'
import { Link } from "react-router-dom";

export const CardDoc = styled.div`
    background-image: url(${doctor});
    background-size: cover;
    height: 124px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    @media (max-width: 720px) {
        height: 77px;
    }
    
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
        @media (max-width: 720px) {
            height: 77px;
        }
    }

    h1 {
        font-size: 24px;
        font-weight: 700;
        @media (max-width: 720px) {
          font-size: 10px;
        }
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
        @media (max-width: 720px) {
            font-weight: 400;
            font-size: 6px;
            line-height: 10px;
            padding: 6px 9px;
        }
    }

`

export const SeeAll = styled(Link)`
    /* font-family: 'Inter'; */
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    color: rgba(28, 28, 28, 0.7);
    text-decoration: none;
    @media (max-width: 720px) {
        display: none;
    }

`

export const Col = styled.div`
  display: grid;
  margin-top: 15px;
  margin-bottom: 34px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.75rem 2.5rem;
    @media (max-width: 720px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem 1.75rem;
    }
`

export const Location = styled(Link)`
    text-decoration: none;

    .img-cover {
        border-radius: 5px;
        margin-bottom: 8px;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .link {
        display: flex;
        align-items: center;
        margin-top: 8px;

        img {
            width: 15px;
            @media (max-width: 720px) {
                width: 7px;
            }
        }
    }

    h2 {
        font-weight: 700;
        font-size: 18px;
        color: #1C1C1C;
        @media (max-width: 720px) {
            font-size: 10px;
        }
    }

    span {
        font-weight: 700;
        font-size: 10px;
        color: rgba(28, 28, 28, 0.7);
        margin-left: 9px;
        @media (max-width: 720px) {
            font-size: 6px;
        }
    }
`

export const Button = styled.div`
  width: 100%;
  display: none;
  margin-top: 22px;
  margin-bottom: 35px;
    @media (max-width: 720px) {
        display: flex;
        justify-content: center; 
    }

    button {
        background: #eef2f6;
        box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 8px 15px;
        border: none;
        font-weight: 500;
        font-size: 10px;
    }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

    h1 {
        font-size: 20px;
        @media (max-width: 720px) {
            font-size: 16px;
        }
    }
`
export const Brand = styled.div`
    display: flex;
    column-gap: 25px;
    margin: 7px 0 17px 0;
    border: none;
    @media (max-width: 720px) {
        border-bottom: 0.2px solid #8B96A5;
    }
    .service {
        display: flex;
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        color: rgba(28, 28, 28, 0.7);
        @media (max-width: 720px) {
            font-size: 6px;
        }

        img {
            width: 18px;
            @media (max-width: 720px) {
                width: 11px;
            }
        }

        span {
            margin-left: 7px;
        }
    }
`

export const SearchBar = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 720px) {
        display: block;
    }

    .input-loc {
        background: #FFFFFF;
        border: 0.5px solid rgba(153, 146, 146, 0.7);
        border-radius: 5px 0px 0px 5px;
        display: flex;
        align-items: center;
        padding: 9px;
        @media(max-width: 720px) {
            border: none;
            border-radius: none;
            width: 50%;
            background: none;
        }

        img {
            width: 11px;
        }

        input {
            border: none;
            outline: none;
            margin-left: 13px;
            width: 100%;
            @media (max-width: 720px) {
                background-color: #FAFAFA;
            }
        }
    }
`
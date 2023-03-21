import styled, {css} from 'styled-components';
import banner from '../image/artikel/Banner-artikel.svg'


export const Container = styled.div`
    width: 100%;
    padding: 1rem 3rem;
    margin: 0 auto;
    box-sizing: border-box;

    h1 {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        @media (max-width : 720px) {
            font-size: 16px;
        }
    }

    h2 {
        font-size: 12px;
        font-weight: 500;
        margin: 0;   
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media (max-width : 720px) {
        flex-direction: column;
    }

    .item {
        border-bottom: 1px solid #ECE4E4;
        padding-top: 14px;
        padding-bottom: 10px;
        &:first-child {
            padding-top: 0;
        }
        @media (max-width : 720px) {
            flex-direction: row;
        }
    }
`;

export const Banner = styled.div`
    background-image: url(${banner});
    height: 232px;
    background-size: cover;
    border-radius: 5px;
    width: 70%;
    @media (max-width : 720px) {
        width: 100%;
        height: 147px;
        margin-bottom: 21px;

    }

    div {
        box-sizing: border-box;
        background: rgba(255,255,255, 0.7);
        width: 100%;
        height: 232px;
        border-radius: 5px;
        display: flex;
        align-items: flex-end; 
        @media (max-width : 720px) {
            height: 147px;
        }
    }

    h1 {
        padding-left: 48px;
        padding-bottom: 41px;
        @media (max-width : 720px) {
            padding: 0 119px 20px 20px;
            font-size: 14px;
            line-height: 22px;

        }
    }

`;

export const List = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-left: 58px;
    @media (max-width : 720px) {
        width: 100%;
        margin-left: 0;
    }
`


export const ListImage = styled.img`
    width: 77px;
    height: 45px;
    object-fit: cover;
    border-radius: 5px;
`;

export const ListInfo = styled.div`
    margin-left: 14px;
    flex-wrap: wrap;
    
    h2 {
        line-heigh: 15px;
    }

    a {
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #2C4AE8;
        text-decoration: none;
    }
`;
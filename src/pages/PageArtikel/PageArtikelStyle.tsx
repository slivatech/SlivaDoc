import styled from 'styled-components';
import banner from '../../assets/image/Banner-artikel.svg'


export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 1rem 3rem;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #FAFAFA;
    @media (max-width : 720px) {
        padding: 1.5rem;
    }

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

export const Top = styled.div`
    padding: 23px 0;
    
    .top-article {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 28px;
        @media (max-width : 720px) {
            flex-direction: column;
        }

    }

    .item {
        border-bottom: 1px solid #ECE4E4;
        padding-top: 14px;
        padding-bottom: 10px;
        &:first-child {
            padding-top: 0;
        }
        @media (max-width : 720px) {
            padding-bottom: 15px;
        }
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
   
`;

export const Col = styled.div`
    display: grid;
    margin-top: 29px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.5rem 2rem;
    @media (max-width : 720px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem 1rem;
        margin-top: 20px;
    }
`

export const Banner = styled.div`
    background-image: url(${banner});
    height: 232px;
    background-size: cover;
    border-radius: 5px;
    width: 75%;
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
    width: 25%;
    display: flex;
    flex-direction: column;
    margin-left: 58px;
    @media (max-width : 720px) {
        width: 100%;
        margin-left: 0;
        border-top: 1px solid #ECE4E4;
        padding-top: 17px;
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
        text-align: center;
        color: #2C4AE8;
        text-decoration: none;
    }
`;

export const Card = styled.div`
    min-height: 231px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 9px 10px;
    @media (max-width : 720px) {
        min-height: 150px;
    }

    button {
        background: linear-gradient(180deg, #C8D5E4 0%, #90AAD1 100%);
        border-radius: 3px;
        border: none;
        padding: 2px 14px;
        color: white;
        font-size: 8px;
        @media (max-width: 720px) {
            padding: 4px 5px;
            font-size: 6px;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        @media (max-width : 720px) {
            font-size: 10px;
            line-height: 10px;
        }
    }

    p {
        font-weight: 500;
        font-size: 10px;
        line-height: 10px;
        color: rgba(28, 28, 28, 0.7);
        @media(max-width: 720px) {
            font-size: 8px;
            line-height: 8px;
        }
    }
    
    a {
        font-weight: 300;
        font-size: 8px;
        color: #2C4AE8;
        text-decoration: none;
        margin: 0;
    }
    
`;

export const CardImage = styled.img`
    width: 100%;
    height: 92px;
    object-fit: cover;
    border-radius: 5px;
    @media (max-width: 720px) {
        height: 45px;
    }
    
`;

export const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 10px;

    button {
        background: #EEF2F6;
        box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 10px 17px;
        border: none;
    }
`
export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 28px;
    border-bottom: 1px solid #ECE4E4;

    button {
        background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
        color: white;
        border: none;
        cursor: pointer;
    }
    
    form {
        display: flex;
        width: 85%;
        border: 1px solid #0D6EFD;
        border-radius: 5px;
        @media (max-width: 720px) {
            width: 100%;
        }

        button {
            padding: 10px 23px;
            @media (max-width: 720px) {
                padding: 9px 20px;
            }
        }
    }

    input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
    }

    .btn-all {
        padding: 11px 26px;
        border-radius: 5px;
        @media (max-width: 720px) {
            display: none;
        }
    }
`
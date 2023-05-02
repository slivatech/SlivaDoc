import styled from "styled-components";

export const Form = styled.div`
    margin-top: 52px;

    h2 {
        font-weight: 700;
        font-size: 25.63px;
        color: #06152B;
    }

    img {
        width: 64px;
        height: 66px;
        border-radius: 50%;
        object-fit: cover;
        margin: 35px 0;
    }

    form {
        width: 70%;
        @media (max-width: 720px) {
            width: 100%;
        }

        .row {
            display: flex;
            flex-direction: row;
            column-gap: 45px;
            @media (max-width: 720px) {
                column-gap: 13px;
            }
        }
    }

    .inpWrap{
        width: 100%;
        margin-bottom: 19px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        @media (max-width: 720px) {
            margin-bottom: 17px;
            gap: 7px;
        }
        
        label {
            font-weight: 600;
            font-size: 16px;
            @media (max-width: 720px) {
                font-size: 12px;
            }
        }

        input, select, option {
            height: 40px;
            border: 2px solid #FFE9E9;
            outline: none;
            border-radius: 5px;
            padding: 12px 16px;
            background: #FFFFFF
            font-weight: 500;
            font-size: 14px;
            @media (max-width: 720px) {
                height: 28px;
                font-size: 8px;
                border-radius: 3px;
            }
        }
    }
`

export const Cards = styled.div`
    display: flex;
    column-gap: 30px;
    @media (max-width: 720px) {
        column-gap: 20px;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    background: #FCF6F6;
    border-radius: 10.5635px;
    min-width: 30%;
    min-height: 114px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 15px;
    @media (max-width: 720px) {
        min-width: 150px;
        border-radius: 5px;
        column-gap: 3px;
        padding: 5px;
    }
    
    .text {
        align-items: center;
        column-gap: 15px;
        color: #06152B;
        margin-bottom: 12px;
        
        h1 {
            font-weight: 700;
            font-size: 24.0637px;
            opacity: 0.7;
            @media (max-width: 720px) {
                font-size: 14px;
            }
        }
        
        span {
            font-weight: 400;
            font-size: 15.0213px;
            opacity: 0.7;
            @media (max-width: 720px) {
                font-size: 8px;
            }
        }
    }
    

    button {
        background: #127FFF;
        border-radius: 5px;
        color: #FFF;
        border: none;
        font-weight: 400;
        font-size: 10px;
        cursor: pointer;
    }

    .btn-card {
        padding: 8px 16px;
        line-height: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 3px;

        img {
            width: 12px;
            margin-left: 3px;
        }
    }
`
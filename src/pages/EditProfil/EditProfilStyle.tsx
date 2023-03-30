import styled from "styled-components";

export const Form = styled.div`
    margin-top: 52px;

    h2 {
        font-family: 'DM Sans';
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

        .row {
            display: flex;
            flex-direction: row;
            column-gap: 45px;
        }

        button {
            padding: 8px 43px;
            border-radius: 5px;
            font-weight: 400;
            font-size: 24px;
            cursor: pointer;
        }

        .btn-cancel {
            color: #0D6EFD;
            background: #FFFFFF;
            border: 2px solid #FFE9E9;
            margin-right: 22px
        }

        .btn-save {
            background: #127FFF;
            color: #FFF;
            border: 2px solid #127FFF;
        }
    }

    .inpWrap{
        width: 100%;
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label{
            font-weight: 600;
            font-size: 16px;
        }

        input, select, option {
            border: 2px solid #FFE9E9;
            outline: none;
            border-radius: 5px;
            padding: 12px 16px;
            background: #FFFFFF
            font-weight: 500;
            font-size: 14px;
        }
    }
`

export const Card = styled.div`
    background: #FCF6F6;
    border-radius: 10.5635px;
    min-width: 292.61px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 13px 17px 15px 25px;
    
    .text {
        display: flex;
        align-items: center;
        column-gap: 15px;
        color: #06152B;
        margin-bottom: 12px;
        
        h1 {
            font-weight: 700;
            font-size: 24.0637px;
            opacity: 0.7;
        }
        
        span {
            font-weight: 400;
            font-size: 15.0213px;
            opacity: 0.7;
        }
    }
    
    img {
        width: 63.38px;
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
            // margin-left: 3px;
        }
    }
`
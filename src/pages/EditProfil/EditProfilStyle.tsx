import styled from "styled-components";

export const Form = styled.div`
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
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
    @media (max-width: 720px) {
        flex-direction: column;
    }

    h5 {
        font-weight: 500;
        font-size: 18px;
        color: #06152B;
        opacity: 0.7;
    }

    .table {
        // width: auto;
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
        flex-basis: 70%;
    }
`;

export const Chart =styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;

        .bar-chart {
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 30px;
            padding: 30px;
        }
        .pie-chart{
                background-color: #fff;
                border-radius: 10px;
                padding: 30px;
        }
`;

export const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
    .inpWrap{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
            font-weight: 500;
            font-size: 16px;
            color: #06152B;
        }

        input, textarea{
            outline: none;
            border: none;
            background-color: #F1F4FA;
            border-radius: 5px;
            padding: 20px 15px;
        }
    }

`

export const Profile = styled.div`
    width: 178px;
    height: 71px;
    background-color: #EBDEDE;
    border-radius: 5px;
    position: relative;
`
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

    h5 {
        font-weight: 500;
        font-size: 18px;
        color: #06152B;
        opacity: 0.7;
    }

    .table {
        width: auto;
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }

    .chart {
        width: 30%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }
`;

export const Form = styled.div`
    width: 100%;
    height: 100%;
    
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

    // .submit{
    //     margin-top: 3rem;
    // }
`

export const Profile = styled.div`
    width: 110px;
    height: 110px;
    background-color: #F1F4FA;
    border-radius: 50%;
    position: relative;
`
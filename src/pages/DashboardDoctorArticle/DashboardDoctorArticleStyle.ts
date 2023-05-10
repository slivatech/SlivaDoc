import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 100%;
  max-width: 1400px;
  /* padding: 1rem 3rem; */
  padding: 15px 8%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fafafa;
  @media (max-width: 720px) {
    padding: 1rem;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    @media (max-width: 720px) {
      font-size: 16px;
    }
  }

  h2 {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    
  }
`;


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
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
    }
    
    
`;
export const Chart =styled.div`
display: flex;
flex-direction: column;
.chart {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 30px;
    }
.pie-chart{
        background-color: #fff;
        border-radius: 10px;
        padding: 30px;
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

    .submit{
        margin-top: 3rem;
    }
`
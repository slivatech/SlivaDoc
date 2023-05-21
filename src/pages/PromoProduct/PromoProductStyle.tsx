import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin:0 129px;
  background: #ffff;

`;

export const HeadingContainer =styled.div`
     max-width: 1920px;
   background: rgba(230, 231, 232, 0.3);
   height: 82px;

   div{
    display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin:0 129px;
      padding:32px 0;
        img{
            width: 134px;
            height: 22px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color: #1C1C1C;
        }
   }
`;

export const SliderContainer =styled.div`
  margin: 32px 0;
`;

export const CountdownContainer =styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
  background: #CEEAF0;
border-radius: 10px;
max-width: 1181px;
height: auto;
padding: 45px 56px 40px 56px;

.name-promo{
  display: flex;
  flex-direction: column;
  h3{
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: #1C1C1C;
    font-style: italic;
  }
  h1{
    margin-top:12px;
    font-weight: 700;
font-size: 40px;
line-height: 22px;
color: #1C1C1C;
    span{
      color: #2335D4;
    }
  }
}
`;
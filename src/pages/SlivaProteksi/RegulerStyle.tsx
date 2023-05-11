import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 49px;
`;

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;

  img {
    width: 180px;
    height: 24px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 15px;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #ffff;
    background: linear-gradient(
      180deg,
      rgba(111, 158, 214, 0.4) 0%,
      #90aad1 100%
    );
    border-radius: 5px;
  }
  h1 {
    width: 408px;
    margin-top: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #1c1c1c;
    span {
      color: #2557d9;
    }
  }
  button {
    margin-top: 23px;
    background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    width: 140px;
    height: 35px;
    margin-top: 24px;
    cursor: pointer;
  }
`;

export const BenefitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1096px;
  margin: auto;
  margin-top: 87px;
  padding: 36px;
  background: #edeff4;
  box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h1 {
    width: 252px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #1c1c1c;
  }
`;
export const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  margin-bottom: 47px;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 22px;
  }
  img {
    margin: auto;
    margin-top: 26px;
    width: 109px;
    height: 3px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
`;
export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 924px;
  margin: auto;
`;

export const SliderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// align-text: center;
margin: auto;
background: conic-gradient(
  from 180deg at 50% 66.23%,
  rgba(92, 132, 237, 0) 0deg,
  #b8c3e9 183.57deg,
  rgba(92, 132, 237, 0) 360deg
);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
padding: 40px;
width: 976px;
height: 338px;
`;

export const SponsorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  align-items: center;
  margin-top: 156px;
  h1 {
    width: 335px;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #1c1c1c;
    margin-right: 105px;
    span {
      color: #00b7ff;
    }
  }
  img {
    width: 656px;
    height: 153px;
  }
`;

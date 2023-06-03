import styled from "styled-components";

export const Container = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: wrap;
  gap: 23px;
  max-width: 1400px;
  width: 100%;
  margin-bottom: 58px;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FilterContainer = styled.div`
  margin: 0;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  width: 576px;
  height: 450px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-top: 3rem;
    padding: 20px;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 574px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 20px;
  }

  @media only screen and (max-width: 480px) {
    margin: 0;
    padding: 10px;
  }
`;

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 597px;
  background-color: hsl(0, 0%, 100%);
  padding: 20px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 767px) {
    margin: 0;
    padding: 10px;
    width: auto;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;

  @media (max-width: 767px) {
    font-size: 18px;
    text-align: justify;
    margin: 24px 20px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const Link = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.7);
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 12px;
    
  }
`;

export const Banner = styled.div`
  width: auto;
  background: linear-gradient(180deg, #e6eaee 0%, #cfdef3 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 90px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 19px;

  @media (max-width: 767px) {
    height: auto;
    padding: 10px;
  }
`;

export const ImgBanner = styled.img`
  width: 46px;
  height: 52px;
  margin-right: 5px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const DescBanner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;

  h1 {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    color: rgba(28, 28, 28, 0.7);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 767px) {
    justify-content: flex-start;
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  display: flex;
  margin-left: auto;
  align-items: end;
  @media only screen and (max-width: 768px) {
    width: 110px;
  }
`;

export const ContainerDesc = styled.div`
  margin: 0;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(28, 28, 28, 0.7);
  }
`;

export const DoctorGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
`;

export const ButtonGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 37px;
`;

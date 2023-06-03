import styled from "styled-components";

export const Container = styled.div`
  background: rgba(230, 231, 232, 0.3);
  display: flex;
  flex-direction: row;
  gap: 14px;
  max-width: 1400px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
  }
`;

export const ContainerInformasi = styled.div`
  background: #ffff;
  border-radius: 5px;
  margin: 30px 100px;
  margin-right: 0;
  width: 659px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-top: 50px;
    border-radius: 0;
    width: 100%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const KlinikBanner = styled.img`
  max-width: 672px;
  height: 173px;
  border: 0.5px solid #b98d8d;
  border-radius: 5px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
  margin-top: 45px;
  h1 {
    font-weight: 700;
    font-size: 19px;
    line-height: 40px;
  }
  h3 {
    font-style: none;
    color: #f90909;
    font-weight: 500;
    font-size: 15px;
    line-height: 10px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 3px;
  }
`;

export const LocationContainer = styled.div`
  border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  margin-top: 10px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: wrap;
    align-items: center;
  }
  img {
    justify-content: flex-start;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    color: #000000;
  }
  h1 {
    font-weight: 700;
    font-size: 19px;
    line-height: 40px;
  }
`;
export const LocationLogo = styled.img`
  margin-left: auto;
  position: a;
  top: 0;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

export const BookingContainer = styled.div`
  background: #ffff;
  border-radius: 5px;
  margin-top: 30px;
  margin-left: 0;
  margin-bottom: auto;
  width: 418px;

  @media only screen and (max-width: 768px) {
    margin-top: 15px;
    width: 100%;
  }
`;

export const ConsultationContainer = styled.div`
  margin: 50px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const HeaderConsultation = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const Watch = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-top: 0.5px solid rgba(28, 28, 28, 0.6);
  transform: rotate(-0.16deg);

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const WatchHead = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 27px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
  }

  img {
    width: 19px;
    height: 19px;
    margin-right: 6px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const WatchContent = styled.div`
  display: flex;
  flex-direction: wrap;
  width: 107px;
  height: 24px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px;
    background-color: #ece4e4;
    border-radius: 5px;
    padding: 5px 15px;
    width: 107px;
    height: 24px;

    &.selected {
      background: linear-gradient(180deg, #5296e5 0%, #90aad1 100%);
      color: white;
    }
  }
`;

export const CalendarContainer = styled.div`
  margin: 0;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    border-top: 0.5px solid rgba(28, 28, 28, 0.6);
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

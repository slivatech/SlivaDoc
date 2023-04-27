import styled from "styled-components";

export const Container = styled.div`
  background: rgba(230, 231, 232, 0.3);
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding: 10px 8%;
  /* max-width: 1400px; */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
  }
`;

export const ContainerInformasi = styled.div`
  background: #ffff;
  border-radius: 5px;
  margin: 15px 0;
  margin-right: 0;
  /* width:739px; */
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
    font-size: 20px;
    line-height: 40px;
  }
  h3 {
    font-style: none;
    color: #f90909;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    margin-bottom: 3px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
  margin-top: 10px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    justify-content: flex-start;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    color: #000000;
  }
`;
export const LocationLogo = styled.img`
  margin-left: auto;
`;

export const BookingContainer = styled.div`
  background: #ffff;
  border-radius: 5px;
  margin: 80px;
  margin-top: 15px;
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
  font-size: 14px;
  margin: 0;
  margin-bottom: 20px;
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
  flex-wrap: wrap;

  div {
    display: flex;
    background: #ece4e4;
    border-radius: 3px;
    width: 107px;
    height: 24px;
    align-items: center;
    margin-right: 12px;
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

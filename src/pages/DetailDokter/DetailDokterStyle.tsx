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
  background:#ffff;
  border-radius: 5px;
  margin: 100px;
  margin-right:0;
  width:739px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-top: 50px;
    border-radius: 0;
    width:100%;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin: 50px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    width:100%;
  }
`;

export const DoctorPhoto = styled.img`
  width: 117px;
height: 150px;
left: 157px;
margin-right:30px;
top: 285px;

`;

export const DoctorInfoContainer = styled.div`
display: flex;
flex-direction:wrap;
align-items: center;
`;

export const Profile= styled.div`
  display:flex;
  flex-direction:column;
`;

export const DoctorName = styled.h1`
  font-weight: 700;
font-size: 20px;
line-height: 22px;
  margin: 0;
  margin-bottom:3px;
`;

export const DoctorSpecialty = styled.p`
  font-weight: 400;
font-size: 12px;
line-height: 22px;
  margin: 0;
`;

export const DoctorSTR = styled.p`
  font-weight: 400;
font-size: 8px;
line-height: 10px;
  margin: 0;
`;

export const DoctorAbout = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
`;

export const ExperienceContainer = styled.div`
  margin-top: 50px;
  display:flex-direction;
  flex:column;
`;
export const ExperienceHeader = styled.h1`
  border-bottom: 2px dashed #fff;
  font-size:20px;
  margin-bottom:36px;
`;

export const HeaderInfo = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
`;

export const InfoDescription = styled.p`
  font-size: 12px;
  margin: 0;
  margin-bottom: 20px;
`;

export const HeaderExperience = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-top: 21px;

`;

export const ExperienceDescription = styled.p`
  font-size: 12px;
  margin:11px 0;
`;
export const BookingContainer = styled.div`
  background: #ffff;
  border-radius: 5px;
  margin: 80px;
  margin-top: 100px;
  margin-left: 0;
  margin-bottom: auto;
  width: 418px;

  @media only screen and (max-width: 768px) {

    width: 100%;
  }
`;

export const ConsultationContainer = styled.div`
  margin: 50px;

  @media only screen and (max-width: 768px) {
    margin:0;
  }
`;

export const HeaderConsultation = styled.h2`
  font-size: 14px;
  margin: 0;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-left: 20px;
  font-color: rgba(28, 28, 28, 0.7);
  font-size: 12px;
  padding: 0;
  line-height: 22px;
`;

export const DropdownWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  @media only screen and (max-width: 768px) {
    justify-content:left;
    width:100%;
    

  }
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
  margin:0;
  
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    border-top: 0.5px solid rgba(28, 28, 28, 0.6);
    width:100%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;

    width:100%;
  }
`;
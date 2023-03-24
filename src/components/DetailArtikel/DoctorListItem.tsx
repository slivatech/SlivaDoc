import React from "react";
import styled from "styled-components";
import icon from "../../assets/icon/icon.png";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  price: number;
  image: string;
}

interface DoctorListItemProps {
  doctor: Doctor;
}

const DoctorListItemContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  margin: 20px;
  @media (max-width: 700px) {
    width: 20px;
  }
`;

const DoctorImage = styled.img`
  width: 120px;
  height: 170px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const DoctorSpecialty = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
`;

const DoctorPrice = styled.span`
  font-size: 8px;
  margin-bottom: 10px;
  text-align: left;
  color: #f90909b2;
`;

export const ConsultButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: space-between;
  margin-left: 398px;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(180deg, #5296e5 0%, #90aad1 100%);
`;

const DoctorListItem: React.FC<DoctorListItemProps> = ({ doctor }) => {
  const { name, specialty, price, image } = doctor;

  return (
    <DoctorListItemContainer>
      <DoctorImage src={image} alt={`Foto ${name}`} />
      <DoctorInfo>
        <DoctorName>{name}</DoctorName>
        <DoctorSpecialty>{specialty}</DoctorSpecialty>
        <img
          src={icon}
          style={{
            width: "59px",
            height: "16px",
            display: "flex",
          }}
          alt="icon"
        />
        <p
          style={{
            fontSize: "8px",
          }}
        >
          Mulai dari :
        </p>
        <DoctorPrice>{`RP ${price}`}</DoctorPrice>
        <ConsultButton>Mulai Konsultasi</ConsultButton>
      </DoctorInfo>
    </DoctorListItemContainer>
  );
};

export default DoctorListItem;

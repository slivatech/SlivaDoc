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
  display: flex;
  flex-direction: row;
  margin: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DoctorImage = styled.img`
  width: 120px;
  height: 170px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    cursor: pointer;
    background: linear-gradient(180deg, #5296e5 0%, #90aad1 100%);
    color: #ffff;
    border-radius: 5px;
    padding: 10px 17px;
    border: none;
    align-self: flex-end;
    margin-top: 20px;
    margin-left: 400px;
  }

  @media (max-width: 1024px) {
    button {
      margin-left: 0;
      align-self: center;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-top: 10px;
      align-self: flex-end;
    }
  }
`;

const DoctorName = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const DoctorSpecialty = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

const DoctorPrice = styled.span`
  font-size: 8px;
  margin-bottom: 10px;
  text-align: left;
  color: #f90909b2;

  @media (max-width: 1024px) {
    text-align: left;
  }
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
        <button>Mulai konsultasi</button>
      </DoctorInfo>
    </DoctorListItemContainer>
  );
};

export default DoctorListItem;

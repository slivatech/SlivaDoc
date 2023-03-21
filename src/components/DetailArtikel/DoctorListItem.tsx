import React from 'react';
import styled from 'styled-components';

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
  align-items: center;
  margin: 20px 0;
  
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
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align:left;
`;

const DoctorSpecialty = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  text-align:left;
`;

const DoctorPrice = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  text-align:left;
`;

const ConsultButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: flex-end;
  margin-left: 40rem;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(180deg, #5296E5 0%, #90AAD1 100%);
`;

const DoctorListItem: React.FC<DoctorListItemProps> = ({ doctor }) => {
  const { name, specialty, price, image } = doctor;

  return (
    <DoctorListItemContainer>
      <DoctorImage src={image} alt={`Foto ${name}`} />
      <DoctorInfo>
        <DoctorName>{name}</DoctorName>
        <DoctorSpecialty>{specialty}</DoctorSpecialty>
        <DoctorPrice>{`Mulai dari: ${price}`}</DoctorPrice>
        <ConsultButton>Mulai Konsultasi</ConsultButton>
      </DoctorInfo>
    </DoctorListItemContainer>
  );
};

export default DoctorListItem;
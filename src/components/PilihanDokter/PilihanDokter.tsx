import React from "react";
import styled from "styled-components";

type Doctor = {
  specialty: string;
  image: string;
};

type Props = {
  doctors: Doctor[];
};

const DoctorList: React.FC<Props> = ({ doctors }) => {
  return (
    <DoctorListContainer>
      {doctors.map((doctor, index) => (
        <DoctorListItem key={index}>
          <DoctorImage src={doctor.image} alt={doctor.specialty} />
          <DoctorDetails>
            <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
          </DoctorDetails>
        </DoctorListItem>
      ))}
    </DoctorListContainer>
  );
};

const DoctorListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DoctorListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DoctorImage = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const DoctorDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const DoctorSpecialty = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

export default DoctorList;

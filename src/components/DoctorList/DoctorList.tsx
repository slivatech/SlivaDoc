import React from 'react';
import styled from 'styled-components';



type Doctor = {

  description: string;
  image: string;
};

type Props = {
  doctors: Doctor[];
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;
  margin-top: 21px;;
`;

const DoctorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor:pointer;
`;

const DoctorImage = styled.img`
  width: 100%;
  max-width: 200px;
`;

const DoctorDescription = styled.p`
  margin-top: 8px;
  color:rgba(28, 28, 28, 0.7);
  font-size:11px;
`;

const DoctorList: React.FC<Props> = ({ doctors }) => {
    return (
      <GridContainer>
        {doctors.map((doctor, index) => (
          <DoctorCard key={index}>
            <DoctorImage src={doctor.image} alt="doctorimage" />
            <DoctorDescription>{doctor.description}</DoctorDescription>
          </DoctorCard>
        ))}
        
        </GridContainer>
    );
  };
  
  export default DoctorList;
import React from "react";
import styled from "styled-components";
import expicon from "../../assets/icon/portfolio.png"
import rateicon from "../../assets/icon/review.png"
import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  price: number;
  image: string;
  rating:number;
  exp:number;
  nav:string;
}

interface DoctorListItemProps {
  doctor: Doctor;
}

const DoctorListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ECE4E4;
transform: rotate(0.28deg);
padding: 26px 0;
width:100%;;

`;

const DoctorImage = styled.img`
  width: 71px;
height: 90px;
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
  justify-content:center;
 
`;



const ButtonContainer=styled.div`
display: flex;
margin-left:auto;
justify-content: flex-end;
align-items: center;
button{
    cursor: pointer;
    background: linear-gradient(180deg, #5296e5 0%, #90aad1 100%);
    color: #ffff;
    border-radius: 5px;
    padding: 10px 17px;
    border: none;

  }
`;
const DoctorName = styled.span`
  font-size: 14px;
  font-weight: bold;
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

const DoctorDetail =styled.div`
display:flex;
  background: #ECE4E4;
border-radius: 3px;
width: 59px;
height: 16px;
align-items: center;
justify-content: center;
margin-right: 12px;

img{
  width: 9px;
height: 10px;
  display: flex;
  margin:3px;
  
}
p{
  font-weight: 400;
font-size: 8px;
line-height: 10px;

}
`;


const DoctorListItem: React.FC<DoctorListItemProps> = ({ doctor }) => {
  const { name, specialty, price, image,rating,exp,nav,id } = doctor;

  return (
    <DoctorListItemContainer>
      <DoctorImage src={image} alt={`Foto ${name}`} />

      <DoctorInfo>
        <DoctorName>{name}</DoctorName>
        <DoctorSpecialty>{specialty}</DoctorSpecialty>
        <div style={{
          display:"flex",
          flexDirection:"row",
          }}>
          <DoctorDetail>
            <img src= {expicon} alt="exp" />
            <p>{exp} Tahun</p>
            </DoctorDetail>
            <DoctorDetail>
            <img src= {rateicon} alt="rate" />
            <p>{rating}%</p>
            </DoctorDetail>
        </div>
        <p
          style={{
            fontSize: "8px",
          }}
        >
          Mulai dari :
        </p>
        <DoctorPrice>{`RP ${price}`}</DoctorPrice>
      </DoctorInfo>
      <ButtonContainer>
        <Link to={`/${nav}`} key={id}>
      <button>Mulai konsultasi</button>
      </Link>
      </ButtonContainer>

    </DoctorListItemContainer>
  );
};

export default DoctorListItem;

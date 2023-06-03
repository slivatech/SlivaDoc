import React from "react";
import styled from "styled-components";

type CardProps = {
  logo: string;
  packageType: string;
  description: string;
  pricePerMonth: number;
  backgroundColor?: string;
};

const CardContainer = styled.div<{ backgroundColor?: string }>`
  width: 247px;
  height: 262px;
  display: flex;
  margin-right: 60px;
  flex-direction: column;
  padding: 16px;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : "linear-gradient(180deg, #B4B7B7 0%, rgba(234, 243, 245, 0) 100%)"};
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media only screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const Logo = styled.img`
  width: 154px;
  height: 19px;
`;

const PackageType = styled.h2`
  height: 18px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #ffffff;
  background: linear-gradient(180deg, #69717b 0%, #90aad1 100%);
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
`;

const PricePerMonth = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #22badc;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  width: 6.313rem;
  height: 1.563rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const DetailButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.313rem;
  height: 1.563rem;
  background-color: #ffffff;
  border: 1px solid #c8d5e4;
  margin-right: 8px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const RegisterButton = styled(Button)`
  background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;
  border: none;
`;
const Span = styled.p`
  font-weight: 400;
  margin-top: 25px;
  font-size: 10px;
  line-height: 22px;
  color: #505050;
`;

const Card = ({
  logo,
  packageType,
  description,
  pricePerMonth,
  backgroundColor,
}: CardProps) => {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <Logo src={logo} alt="Logo" />
      <PackageType>{packageType}</PackageType>
      <Description>{description}</Description>
      <Span>Mulai Dari</Span>
      <PricePerMonth>{`Rp.${pricePerMonth}/bulan`}</PricePerMonth>
      <ButtonContainer>
        <DetailButton>Lihat Detail</DetailButton>
        <RegisterButton>Daftar</RegisterButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;

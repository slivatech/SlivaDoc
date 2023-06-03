import React from "react";
import styled from "styled-components";

interface BenefitItem {
  image: string;
  title: string;
  description: string;
}

interface BenefitsListProps {
  benefits: BenefitItem[];
  columns: number;
  rows: number;
}

const Benefits: React.FC<BenefitsListProps> = ({ benefits, columns, rows }) => {
  const itemsPerPage = columns * rows;

  return (
    <Container>
      <Title>Semua Biaya Ditanggung Cashless Rp.100 Juta</Title>
      <BenefitsListContainer columns={columns}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <BenefitsRow key={rowIndex}>
            {benefits
              .slice(
                rowIndex * columns * rows,
                rowIndex * columns * rows + itemsPerPage
              )
              .map((benefit, index) => (
                <BenefitsItem key={index}>
                  <BenefitsImage src={benefit.image} alt={benefit.title} />
                  <BenefitsContent>
                    <BenefitsTitle>{benefit.title}</BenefitsTitle>
                    <BenefitsDescription>
                      {benefit.description}
                    </BenefitsDescription>
                  </BenefitsContent>
                </BenefitsItem>
              ))}
          </BenefitsRow>
        ))}
      </BenefitsListContainer>
    </Container>
  );
};

const BenefitsListContainer = styled.div<{ columns: number }>`
  margin-top: 43px;

  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`;
const Container=styled.div`
    width:655px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
    width: 100%;

  }
`;

const BenefitsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  max-width: calc(50% - 10px);
  margin-bottom: 16px;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const BenefitsImage = styled.img`
  width: 50px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

const BenefitsContent = styled.div``;

const BenefitsTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const BenefitsDescription = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Title=styled.div`
font-weight: 700;
        font-size: 20px;
        width: 650px;
        height: 44px;
        line-height: 36px;
        color: #1C1C1C;
        background: linear-gradient(180deg, #EFF3FD 0%, rgba(37, 87, 217, 0) 100%);
        border: 1px solid #E1D9D9;
        filter: drop-shadow(4px 2px 4px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        padding: 0 96px;
        @media (max-width: 767px) {
        width: 100%;
        height:auto;
        padding:0;
        text-align: center;
  }
`;

export default Benefits;

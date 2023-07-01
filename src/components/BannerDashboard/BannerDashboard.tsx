import React from 'react';
import styled from 'styled-components';
import topUp from '../../assets/icon/topUp.svg';
import tariktunai from '../../assets/icon/tarik-tunai.svg';

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 268px;
  height: 116px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--light-version-surface-neutral, #FFF);
  margin-right: 40px;
  padding: 10px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 21px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const Total = styled.div`
  color: var(--light-version-type-text-dark, #06152B);
  font-size: 24.064px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.699999988079071;
  display: flex;
  align-items: center;
`;

const TotalValue = styled.span`
  margin-right: 5px;
`;

const TotalPercentage = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-left: 2px;
`;

const Name = styled.div`
  color: var(--light-version-type-text-dark, #06152B);
  font-size: 15.021px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  opacity: 0.699999988079071;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5.282px;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  background: #F2EBEB;
  box-shadow: 3px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px;
  border: none;
  color: var(--light-version-type-text-dark, #06152B);
  font-size: 10px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 77px;
  height: 28px;
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
`;

interface DataItem {
  id: number;
  imageSrc: string;
  total: number;
  name: string;
}

interface Props {
  data: DataItem[];
}

const formatCurrency = (value: number): string => {
  return `Rp ${value.toLocaleString('id-ID')}`;
};

const BannerDashboard: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <DivContainer key={item.id}>
          <Image src={item.imageSrc} alt="Item Image" />
          <DetailContainer>
            {index === 2 ? (
              <Total>
                <TotalValue>{item.total}</TotalValue>
                <TotalPercentage>%</TotalPercentage>
              </Total>
            ) : (
              <Total>{formatCurrency(item.total)}</Total>
            )}
            <Name>{item.name}</Name>
            {index === 3 && (
              <ButtonContainer>
                <Button>
                  TopUp
                  <Icon src={topUp} alt="Icon 1" />
                </Button>
                <Button>
                  Tarik Tunai
                  <Icon src={tariktunai} alt="Icon 2" />
                </Button>
              </ButtonContainer>
            )}
          </DetailContainer>
        </DivContainer>
      ))}
    </>
  );
};

export default BannerDashboard;

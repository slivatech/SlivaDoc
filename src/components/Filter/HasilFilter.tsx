import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Buttons/BaseButton';
import portoicon from '../../assets/icon/portfolio.png'
import reviewicon from '../../assets/icon/review.png'

interface HasilFilterProps {
  data: any[];
  text: string;
}

const HasilFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height:264px;
  background-color: #ffffff;

  .ElseResult{
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ECE4E4;
  border-radius: 8px;
  height:134px;
  justify-content:center ;
`;

const Foto = styled.img`
  width: 71px;
  height: 90px;
  margin-bottom: 8px;
`;

const Nama = styled.div`
  font-weight: bold;
  font-size: 14px;
`;
const Spesialis = styled.div`
  font-size:12px
`;

const PengalamanPraktik = styled.div`
flex-wrap: wrap;
  background: #ECE4E4;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 16px;

  img{
    width: 9px;
    height: 10px;
    margin-left:6px;
    margin-right: 6px;
  }
`;

const HargaKonsultasi = styled.div`
  color: rgba(249, 9, 9, 0.7);
  font-weight: 400;
font-size: 10px;
line-height: 10px;
`;
const Detailcontainer= styled.div`
display: flex;
  flex-direction: wrap;
  align-items: center;
`;

const Paragraph =styled.div`
font-weight: 400;
font-size: 8px;
line-height: 10px;
`;
const DetailProfile =styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 21px;
`;
const Rating=styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 16px;
  margin-left: 5px;
  background: #ECE4E4;
  font-size: 8px;
  img{
    width: 9px;
    height: 10px;
    margin-left:6px;
    margin-right: 6px;
  }
`;
const WrapperContainer= styled.div`
 display: flex;
 flex-wrap: wrap;
`;

const ButtonContainer= styled.div`
display: flex;
  margin-left: auto;
 align-items: end;
 @media only screen and (max-width: 768px) {
    width:110px;
    
  }
`;

const HasilFilter: React.FC<HasilFilterProps> = ({ data, text }) => {
  return (
    <HasilFilterContainer>
      {data.length > 0 ? (
        data.map((item) => (
          <Card key={item.id}>
  
            <Detailcontainer>
            <Foto src={item.foto} alt={item.nama} />
            <DetailProfile>
            <Nama>{item.nama}</Nama>
            <Spesialis>{item.spesialis}</Spesialis>
            <WrapperContainer>
            <PengalamanPraktik><img src={portoicon} alt="portoicon" />{item.pengalamanPraktik} Tahun</PengalamanPraktik>
            <Rating><img src={reviewicon} alt="rewview" />{item.rating}%</Rating>
            </WrapperContainer>
            <Paragraph>Mulai dari</Paragraph>
            <HargaKonsultasi>Rp {item.hargaKonsultasi.toLocaleString('id')}</HargaKonsultasi>
            </DetailProfile>
            <ButtonContainer>
            <Button 
              text="Mulai Konsultasi"
              textColor="#fff"
              color="#5296E5"
              fontSize="14px"
              radius="5px"
              height='32px'
              width='156px'
              
              />
              </ButtonContainer>
              </Detailcontainer>
          </Card>
        ))
      ) : (
        <div className='ElseResult'>{text}</div>
      )}
    </HasilFilterContainer>
  );
};

export default HasilFilter;
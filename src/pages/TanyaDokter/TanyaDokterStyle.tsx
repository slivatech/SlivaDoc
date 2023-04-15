import styled from "styled-components";

export const Container = styled.div`
  background: #FAFAFA;;
  display: flex;
  flex-direction: wrap;
  gap: 10px;
  max-width: 1400px;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 20px;
  }
`;

export const SliderContainer = styled.div`

  width: 574px;
  height: 454px;
`;

export const FilterContainer = styled.div`
  margin: 0 ;
  padding: 2rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  width:574px;
`;

export const ColumnContainer =styled.div`
display: flex;
  flex-direction: column;
  margin:100px;
  margin-right: 0;
  width:574px;
`;

export const WrapperContainer =styled.div`
display: flex;
  flex-direction: column;
  width:574px;
  margin:100px;
  margin-left:0;
  background-color:hsl(0, 0%, 100%);
 padding:35px;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  @media (max-width: 700px) {
    font-size: 18px;
    text-align: justify;
    margin: 24px 20px;
  }
`;


export const Heading = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: space-between;
`;

export const Link = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: rgba(28, 28, 28, 0.7);
`;


export const Banner = styled.div`
 width:auto;
 background: linear-gradient(180deg, #E6EAEE 0%, #CFDEF3 100%);
border-radius: 10px;
display: flex;
align-items: center;
height: 90px;
flex-wrap: wrap;
justify-content: space-between;
`;

export const ImgBanner =styled.img`
  width: 46px;
height: 52px;
margin-left: 36px;

`;
export const DescBanner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

h1{
  font-weight: 700;
font-size: 14px;
line-height: 22px;
}
p{
  color: rgba(28, 28, 28, 0.7);
  font-weight: 400;
font-size: 14px;
line-height: 22px;
}
`;

export const ButtonContainer= styled.div`
 margin-right:20px;

`;


export const ContainerDesc =styled.div`
  margin:0;
  p{
    font-weight: 400;
font-size: 14px;
line-height: 22px;
color: rgba(28, 28, 28, 0.7);
  }
`;

export const DoctorGrid = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 21px;

`;

export const ButtonGrid = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 37px;


`;
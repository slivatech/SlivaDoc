import styled from "styled-components";

  
export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
margin-top:49px;
`;

export const SectionTop =styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 130px;

 img{
    width: 180px;
height: 24px;
 }

 p{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
height: 15px;
font-weight: 500;
font-size: 8px;
line-height: 10px;
text-align: center;
color:#ffff;
background: linear-gradient(180deg, rgba(111, 158, 214, 0.4) 0%, #90AAD1 100%);
border-radius: 5px;
 }
 h1{
    width:408px;
    margin-top:24px;
    font-weight: 700;
font-size: 24px;
line-height: 40px;
color: #1C1C1C;
    span{
        color:#2557D9;
    }
 }
 button{
    margin-top:23px;
    background: linear-gradient(180deg, #C8D5E4 0%, #90AAD1 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border:none;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
width:136px;
height: 30px;
    margin-top:24px;
    cursor:pointer;
 }
`;

export const BenefitContainer =styled.div`
display: flex;
  justify-content: space-between;
    width: 1096px;
margin:auto;
margin-top:87px;
padding: 36px;
    background: #EDEFF4;
box-shadow: 5px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
h1{
    width:252px;
    font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #1C1C1C;



}

`;
export const Heading=styled.h1`
   display:flex;
   flex-direction:column;
   margin-bottom:47px;

h1{
    text-align: center;
    font-weight: 700;
font-size: 30px;
line-height: 22px;
}
img{
    margin:auto;
    margin-top:26px;
    width: 109px;
height: 3px;

}
`;

export const Title=styled.h1`
    text-align: center;
    font-weight: 700;
font-size: 30px;
line-height: 22px;

`;
export const FaqContainer =styled.div`
    display:flex;
    justify-content: center;
    width:924px;
    margin: auto;
`;

export const SliderContainer=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: conic-gradient(from 180deg at 50% 66.23%, rgba(92, 132, 237, 0) 0deg, #B8C3E9 183.57deg, rgba(92, 132, 237, 0) 360deg);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    padding:26px;
    width: 1096px;
height: 378px;
`;

export const SponsorContainer =styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin: auto;
align-items: center;
margin-top:156px;
h1{
    width:335px;
    font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #1C1C1C;
margin-right:105px;
span{
    color:#00B7FF;
}
}
img{
    width: 656px;
height: 153px;
}
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 794px;
  margin: auto;
  text-align: center;
  margin-top: 37px;
`;

export const TableHeadCell = styled.th`
  padding: 8px;
  background: conic-gradient(from 180deg at 50% 74.49%, rgba(217, 217, 217, 0) 0deg, #B8C3E9 191.25deg, rgba(217, 217, 217, 0) 360deg);
  border-radius: 10px 10px 0px 0px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    border: 1px solid #8CDDE2;
    height: 86px;
  }
`;

export const TableCell = styled.td<{ isBlue?: boolean }>`
  border: 1px solid #8CDDE2;
  padding-left: 33px;
  height: 86px;
  width: 391px;
  text-align: ${({ isBlue }) => (isBlue ? "center" : "left")};
  color: ${({ isBlue }) => (isBlue ? "#2557D9;" : "inherit")};
  font-size: ${({ isBlue }) => (isBlue ? "12px" : "16px")};
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;

  /* padding: 1rem 3rem; */
  padding: 15px 8%;

  box-sizing: border-box;
  background-color: rgba(241, 244, 250, 1);
  @media (max-width: 720px) {
    padding: 1rem;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    @media (max-width: 720px) {
      font-size: 16px;
    }
  }

  h2 {
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }
`;
export const ImageColumn = styled.img`
  width: 30px;
height: 30px;
  object-fit: cover;
  border-radius: 3px;
`;
export const Name=styled.p`
  color: var(--light-version-type-text-dark, #06152B);
font-size: 13.352px;
font-family: DM Sans;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left:10.56px; 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:30px;
  column-gap: 1rem;
    @media (max-width: 720px) {
        flex-direction: column;
    }

  h5 {
    font-weight: 500;
    font-size: 18px;
    color: #06152b;
    opacity: 0.7;
  }

    .table {
        // width: auto;
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
        flex-basis: 70%;
    }
`;

export const Chart =styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    height: 408px;
        .pie-chart{
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
        }
`;



export const Profile = styled.div`
    width: 178px;
    height: 71px;
    background-color: #EBDEDE;
    border-radius: 5px;
    position: relative;
`
export const AreaChartContainer = styled.div`
  background-color: #fff;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  flex-basis: 70%;
  max-width: 660px;
  width: 100%;
  padding:32px;
  padding-left: 0;
  height: 408px;
  align-items: center;
  div{
  
    align-items: flex-start;
    justify-content: left;
    h5{
      margin-left:0;
    text-align: left;
    }
  }
`;
export const StatusColumn = styled.div`
  padding: 7px 20px;
  width: 64.437px;
  border-radius: 8.451px;
  background: #bacddb73;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--light-version-brand-primary, #3A36DB);
    text-align: center;
    font-size: 13.352px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

  }
`;

export const TopConsultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
background: var(--light-version-surface-neutral, #FFF);
padding: 25px;
  width: 430px;
  flex-basis: 40%;
 
  h5{
    color: var(--light-version-type-text-dark, #06152B);
/* H5 */

font-size: 18px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
`;

export const BannerContainer =styled.div`
 display :flex;
 flex-direction: row;
 margin-top: 30px;
`;
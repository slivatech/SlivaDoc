import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 43px;
  padding: 15px 8%;
  @media(max-width: 720px) {
    padding: 0;
    margin: 0;
    row-gap: 13px;
  }

  .p-1 {
    @media(max-width: 720px) {
       padding: 0 5%; 
    }
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  .rate {
    margin: 20px 0 22px;
    span {
      padding: 0 10px;
      border-left: 0.5px solid #2335D4;

      &:first-child {
        padding-left: 0;
        border-left: none;
      }
    }
  }
  h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }
  .span-info {
    color: #7076AE;
    margin-left: 19px;
  }

  table {
    td {
      width: 120px;
      height: 35px;
      font-weight: 400;
      font-size: 14px;
      color: #7076AE;
    }
  }
`

export const ContainerStore = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #CEEAF0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  padding: 57px 40px;
  width: 100%;
  line-height: 22px;
  .left-store {
    display: flex;
    flex-basis: 60%;
    
    h1 {
      font-weight: 700;
      font-size: 20px;
    }
    span {
      font-weight: 400;
      font-size: 14px;
      color: #7076AE;
    }
  }
  .right-store {
    border-left: 0.5px solid #2335D4;
    flex-basis: 40%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap-column: 1rem;

    h6{
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      color: #7076AE;
    }

    span {
      font-weight: 700;
      color: #2335D4;
    }
  }
`
export const ContainerDetail = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #CEEAF0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 40px 42px;
  .desc{
    margin: 28px 16px;
    p{
      margin: 8px 0;
      font-weight: 400;
      font-size: 14px;
      color: #7076AE;
    }
  }

  table {
    margin: 28px 16px;
    td {
      width: 150px;
      height: 35px;
      font-weight: 400;
      font-size: 14px;
      color: #7076AE;
    }
  }
`

export const ImageShop = styled.img`
  width: 87px;
  height: 88px;
  object-fit: cover;
`

export const ImageTesti = styled.img<{width?: string, height: string}>(
  ({width, height}) =>`
  width: ${width ? width : '100%'};
  height: ${height ? height : '100%'};
  object-fit: cover;
`)

export const RedStatus = styled.div`
  background: #F9032F;
  color: #FFFFFF;
  border-radius: 2px;
  padding: 5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 5px;
  width: fit-content;
  margin-top: 5px;
`

export const Title = styled.div`
  background: #CEEAF0;
  border: 0.5px solid #CEEAF0;
  border-radius: 5px;
  width: 100%;
  padding: 18px 30px;
  h1{
    font-weight: 700;
    font-size: 20px;
    color: #2335D4;
  }
`

export const ContainerTestimoni = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #CEEAF0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px 43px 20px 21px;
  display: flex;
  flex-direction: column;
  gap: 70px;

  h1, span {
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;

  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }

  .span-text {
    margin-left: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  .testi-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 25px;
  }

  .btn-reply {
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    background: transparent;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
  }
`

export const ContainerBlue = styled.div`
  background: #CEEAF0;
  border: 0.5px solid #CEEAF0;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  line-height: 22px;

  h1 {
    font-weight: 700;
    font-size: 20px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #2335D4;
  }

  h4 {
    color: #2335D4;
    font-weight: 700;
    font-size: 16px;
  }

  h6 {
    font-weight: 400;
    font-size: 11px;
    color: #2335D4;
  }
`

export const ButtonAdd = styled.div`
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 0.5px solid #CEEAF0;
  border-radius: 5px;
  width: fit-content;
  p {
    margin: 5px 31px;
    font-weight: 700;
    font-size: 16px;
  }
  button {
    background: #CEEAF0;
    border: 0.5px solid #CEEAF0;
    border-radius: 5px;
    width: 46px;
    height: 43px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }
`

export const ContainerFilter = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #CEEAF0;
  border-radius: 5px;
  padding: 23px 32px;
  height: fit-content;

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
  }

  h3 {
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 21px;
  }

  .filter {
    border-bottom: 0.5px solid #CEEAF0;
    padding: 19px 0 16px;
  }
`

export const StarRate = styled.div`
  margin-top: 14px;
  .on {
    color: #FFA500;
  }
  .off {
    color: #000;
  }
`

export const DropdownTitle = styled.div`
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
  }
  h3 {
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: #FF0B0B;
  }
  h2 {
    font-style: italic;
  }
`

export const GridCols = styled.div<{column: string, gap?: string}>(
  ({column, gap}) => `
  width: 100%;
  display: grid;
  grid-template-columns: ${column ? `${column} auto` : 'auto'};
  gap: ${gap ? gap : '1rem'};
`)


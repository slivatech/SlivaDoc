import styled from "styled-components";
import banner from "../../assets/image/Banner-artikel.svg";


export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 1rem 3rem;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fafafa;
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

export const Top = styled.div`
  padding: 23px 0;

  .top-article {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 28px;
    @media (max-width: 720px) {
      flex-direction: column;
    }
  }

  .item {
    border-bottom: 1px solid #ece4e4;
    padding-top: 14px;
    padding-bottom: 10px;
    &:first-child {
      padding-top: 0;
    }
    @media (max-width: 720px) {
      padding-bottom: 15px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col = styled.div`
  display: grid;
  margin-top: 29px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.5rem 2rem;
  @media (max-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem 1rem;
    margin-top: 20px;
  }
`;

export const Banner = styled.div`
  background-image: url(${banner});
  height: 232px;
  background-size: cover;
  border-radius: 5px;
  width: 75%;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100%;
    height: 147px;
    margin-bottom: 21px;
  }

  div {
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 232px;
    border-radius: 5px;
    display: flex;
    align-items: flex-end;
    @media (max-width: 720px) {
      height: 147px;
    }
  }

  h1 {
    padding-left: 48px;
    padding-bottom: 41px;
    @media (max-width: 720px) {
      padding: 0 119px 20px 20px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const List = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  margin-left: 58px;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    border-top: 1px solid #ece4e4;
    padding-top: 17px;
  }
`;

export const ListImage = styled.img`
  width: 77px;
  height: 45px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ListInfo = styled.div`
  margin-left: 14px;
  flex-wrap: wrap;

  h2 {
    line-heigh: 15px;
    font-weight: 700;
  }

  a {
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
    font-size: 10px;
    text-align: center;
    color: #2c4ae8;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  min-height: 211px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 8px 5px;
  cursor: pointer;
  @media (max-width: 720px) {
    min-height: 150px;
  }

  button {
    background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
    border-radius: 3px;
    border: none;
    padding: 4px 12px;
    color: white;
    font-size: 8px;
    cursor: pointer;
    @media (max-width: 720px) {
      padding: 4px 5px;
      font-size: 6px;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    padding: 5px 0;
    @media (max-width: 720px) {
      font-size: 8px;
      line-height: 10px;
      padding: 5px 0;
      font-weight: 700;
    }
  }

  p {
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    color: rgba(28, 28, 28, 0.7);
    @media (max-width: 720px) {
      font-size: 6px;
      line-height: 8px;
    }
  }

  a {
    font-weight: 300;
    font-size: 8px;
    color: #2c4ae8;
    text-decoration: none;
    margin: 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 92px;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 720px) {
    height: 50px;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 10px;

  button {
    background: #eef2f6;
    box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px 37px;
    border: none;
    cursor: pointer;
  }
`;
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #ece4e4;

  button {
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    color: white;
    border: none;
    cursor: pointer;
  }

  form {
    display: flex;
    width: 85%;
    border: 1px solid #0d6efd;
    border-radius: 5px;
    @media (max-width: 720px) {
      width: 100%;
    }

    button {
      padding: 10px 23px;
      @media (max-width: 720px) {
        padding: 9px 20px;
      }
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .btn-all {
    padding: 11px 26px;
    border-radius: 5px;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

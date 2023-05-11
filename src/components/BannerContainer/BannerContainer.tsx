import React from "react";
import styled from "styled-components";
import questionpic from "../../assets/icon/questionpic.png";

interface ContainerProps {
  width?: string;
  height?: string;
}

interface ButtonProps {
  onClick: () => void;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width || "60.6875rem"};
  height: ${(props) => props.height || "9.3125rem"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #edeff4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Deskripsi = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;

  p {
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #505050;
    margin-top: 8px;
  }
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #00b7ff;
  }
`;

const Button = styled.button<ButtonProps>`
  background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background: linear-gradient(180deg, #c8d5e4 0%, #90aad1 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const BannerContainer: React.FC = () => {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Image src={questionpic} alt="image" />
        <Deskripsi>
          <h2>Temukan di FAQ</h2>
          <p>Dapatkan jawaban dari pertanyaan seputar Proteksi Anda</p>
        </Deskripsi>
      </div>
      <Button onClick={handleClick}>Baca Sekarang</Button>
    </Container>
  );
};

export default BannerContainer;

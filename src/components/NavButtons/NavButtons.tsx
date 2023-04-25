import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../Container";

const card = [
  {
    id: 1,
    text: 'Chat dengan dokter',
    img: './assets/chat.svg'
  },
  {
    id: 2,
    text: 'Cari Dokter',
    img: './assets/search.svg'
  },
  {
    id: 3,
    text: 'Sliva Proteksi',
    img: './assets/protection.svg'
  },
  {
    id: 4,
    text: 'SlivaShop',
    img: './assets/shop.svg'
  },
]

const NavButtonsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  /* justify-content: center; */
  /* margin: 0 auto; */
  /* max-width:90%; */
  padding: 2rem 12%;
  /* white-space: nowrap; */
  @media (max-width: 400px) {
    display: grid;
    max-width: 90%;
    padding: 1rem 2%;
    margin: 0 auto;
    /* background: red; */
    grid-template-columns: repeat(4, 1fr);
  }
`;

const NavButton = styled.button(({ theme }) => `
  padding:10px 20px;
  display:flex;
  flex:1;

  align-items: center;
  font-weight:${theme.fontWeights.normal};
  color:${theme.colors.txtSecondary} ;
  border-radius:5px;
  font-size:clamp(10px,2vw,16px);
  outline:none;
  border:none;
  cursor:pointer;
  background:#E3E8EF;
  flex-direction:row;
  gap:.5rem;
  justify-content:center;
  @media (max-width:768px){
    flex-direction:column;
  }
`
);

const SVGIcon = styled.img`
  max-width: 25px;
  max-height: 25px;

  @media (max-width: 400px) {
    max-width: 22px;
    max-height: 22px;
  }
`;

const NavButtons: FC = () => {
  return (
    <Container>
      <NavButtonsStyled>
        {card.map((data) => (
          <NavButton key={data.id}>
            <SVGIcon src={data.img} />
            <p>{data.text}</p>
          </NavButton>
        ))}
      </NavButtonsStyled>
    </Container>
  );
};

export default NavButtons;

import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { Container } from "../Container";
import { GroupButtons } from "../GroupButtons/GroupButtons";

const NavButtonsStyled = styled.div`
  /* max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 2rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NavButton = styled.button(
  ({ theme }) => `
    padding:12px 24px;
  display:flex;
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
  @media (max-width:768px){
    flex-direction:column
  }
`
);

const SVGIcon = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

const NavButtons: FC = () => {
  return (
    <Container>
      <NavButtonsStyled>
        <NavButton>
          <SVGIcon src="/chat.svg" />
          <p>Chat dengan dokter</p>
        </NavButton>
        <NavButton>
          <SVGIcon src="/search.svg" />
          <p>Cari Dokter</p>
        </NavButton>
        <NavButton>
          <SVGIcon src="/protection.svg" />
          <p>Silva Proteksi</p>
        </NavButton>
        <NavButton>
          <SVGIcon src="/shop.svg" />
          <p>SilvaShop</p>
        </NavButton>
        {/* <Button  color="#27292a" bgColor='#E0E5ED' text="Chat dengan dokter" />
        <Button color="#27292a" bgColor='#E0E5ED' text="Cari dokter" />
        <Button color="#27292a" bgColor='#E0E5ED' text="SilvaProteksi" />
        <Button color="#27292a" bgColor='#E0E5ED' text="SlivaShop" />
  */}
      </NavButtonsStyled>
    </Container>
  );
};

export default NavButtons;

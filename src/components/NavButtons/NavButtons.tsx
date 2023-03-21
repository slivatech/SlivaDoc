import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";

const NavButton = styled.button(
  ({ theme }) => `
    padding:12px 24px;
  display:flex;
  align-items: center;
  column-gap:.5rem;
  color:${theme.colors.txtSecondary} ;
  border-radius:10px;

  outline:none;
  border:none;
  cursor:pointer;
  background:#E3E8EF
`
);

const SVGIcon = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

const NavButtons: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GroupButtons>
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
      </GroupButtons>
    </div>
  );
};

export default NavButtons;

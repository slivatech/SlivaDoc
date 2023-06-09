import React, { useState } from "react";
import BarHelper from "./BarHelper";
import BaseButton from "../Common/Buttons/BaseButton";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/icon/logo.svg'
import uk from '../../assets/icon/uk.png'
import id from '../../assets/icon/Indonesia.png'

import {
  BottomNav,
  BottomWrap,
  DropdownWrap,
  Header,
  Line,
  LinkWrap,
  Logo,
  MenuWrap,
  Overlay,
  TopNav,
} from "./styled";
import Dropdown from "../Common/Dropdown/Dropdown";
import SlideIn from "../Common/Slide/SlideIn";

const navigation = [
  {
    id: 1,
    name: "Cari Dokter",
    nav: "medical"
  },
  {
    id: 2,
    name: "Tanya Dokter",
    nav: "ask"
  },
  {
    id: 3,
    name: "Artikel Kesehatan",
    nav: "articles"
  },
  {
    id: 4,
    name: "SlivaProteksi",
    nav: "protection"
  },
  {
    id: 5,
    name: "SlivaShop",
    nav: "shop-home"
  },
  {
    id: 6,
    name: "Animal Events",
    nav: ""
  },
  {
    id: 7,
    name: "Animal Academies",
    nav: ""
  },
];

const language = [
  {
    value: "Indonesia",
  },
  {
    value: "English",
  },
];

interface NavbarProps {
  width: number;
}

const Navbar: React.FC<NavbarProps> = ({ width }) => {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(false);
  const [lang, setLang] = useState("Indonesia");

  return (
    <>
      <Header>
        <TopNav>
          <Logo>
            {width < 767 && (
              <img
                src="./assets/Menu.svg"
                alt=""
                className="toggle"
                onClick={() => setOverlay(true)}
              />
            )}
            <img src={logo} alt="Logo" className="Logo" />
          </Logo>
          <BottomWrap>
          <Link to="/Auth" >
            <BaseButton
              text="Masuk"
              textColor="#fff"
              fontSize="14px"
              color="#127fff"
              radius="5px"
              width="80px"
              height="32px"
              
              // onClick={() => {alert('ressssss')}}
              // style={{background:'linear-gradient(180deg, #127FFF 99.92%, rgba(23, 189, 252, 0) 100%)'}}
            />
            </Link>
            {width > 450 && (
              <BaseButton
                text="Download Aplikasi"
                textColor="#fff"
                fontSize="14px"
                color="#127fff"
                radius="5px"
                width="150px"
                height="32px"
                // onClick={() => {alert('ressssss')}}
              />
            )}
          </BottomWrap>
        </TopNav>
        <BottomNav>
          <MenuWrap>
            {navigation?.map((data) => (
              <LinkWrap to={`/${data.nav}`} key={data.id}>
                {data.name}
              </LinkWrap>
            ))}
          </MenuWrap>
          <DropdownWrap>
            <Dropdown
              options={language}
              border="none"
              fontSize="15px"
              icon={
                lang === "Indonesia" ? (
                  <img
                    src={id}
                    alt="flag"
                    className="flag"
                  />
                ) : (
                  <img src={uk} alt="flag" className="flag" />
                )
              }
              value={lang}
              setValue={setLang}
            />
          </DropdownWrap>
        </BottomNav>
      </Header>

      {width < 768 && overlay && (
        <SlideIn
          isOpen={overlay}
          slideDirection="right"
          slideSpeed={280}
          width="100%"
          height="100%"
        >
          <Overlay>
            <div className="close" onClick={() => setOverlay(false)}>
              <img src="./assets/close.png" alt="close" />
            </div>
            <Line />
            <div className="contentWrap">
              {navigation?.map((data) => (
                <LinkWrap 
                  to={`/${data.nav}`}
                  className="content" 
                  key={data.id}
                >
                  {data.name}
                </LinkWrap>
              ))}
            </div>
            <div className="bttnWrap">
              <BaseButton
                text="Download Aplikasi"
                textColor="#fff"
                fontSize="16px"
                color="#127fff"
                radius="5px"
                width="100%"
                height="40px"
                // onClick={() => {alert('ressssss')}}
              />
            </div>
          </Overlay>
        </SlideIn>
      )}
      <BarHelper />
    </>
  );
};

export default Navbar;

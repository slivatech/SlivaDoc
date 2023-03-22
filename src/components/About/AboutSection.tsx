import React from "react";
import styled from "styled-components";
import { StyledAbout } from "./AboutStyle"
import Search from "../Search/Search";
import { StyledH1 } from "../FontStyle/Font";

// const Styledh1 = styled.h1`
//   font-weight: ${(props) => props.theme.fontWeights.bold};
// `;

const StyledP = styled.p(({ theme })=>`
  color:${theme.colors.txtSecondary};
  font-weight:${theme.fontWeights.bold}
  font-size:clamp(.5rem,4vw,1rem);
`)

const StyledHref= styled.a(({ theme })=>`
  color:${theme.colors.txtSecondary};
  text-decoration:none;
  font-weight:${theme.fontWeights.light};
  font-size:${theme.fontSizes.small};

`)

const AboutSection:React.FC = () => {
  return (
    <StyledAbout>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
        <StyledH1>Solusi <br /> Kesehatan Hewan <br />Terlengkap</StyledH1>
        <StyledP>
          Layanan Booking Dokter Hewan Terbaik di Indonesia <br />
          Chat dokter, beli obat, cek lab dan update informasi seputar kesehatan <br />
          semua bisa di Slivadoc!
        </StyledP>
        
        <Search />
        <StyledHref href="#">Lihat Semua Dokter</StyledHref>

      </div>
      <div style={{ maxWidth: "750px", position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="/banner-pets.png"
        />
      </div>
    </StyledAbout>
  );
};

export default AboutSection;

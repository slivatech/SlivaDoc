import React from "react";
import styled from "styled-components";
import { StyledAbout } from "./AboutStyle"
import Search from "../Search/Search";

const Styledh1 = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const StyledP = styled.p(({ theme })=>`
  font-weight:${theme.fontWeights.bold};
  color:${theme.colors.txtSecondary};
`)

const StyledHref= styled.a(({ theme })=>`
  color:${theme.colors.txtSecondary};
  text-decoration:none;
  font-size:${theme.fontSizes.small};

`)

const AboutSection:React.FC = () => {
  return (
    <StyledAbout>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
        <Styledh1>Solusi <br /> Kesehatan Hewan <br />Terlengkap</Styledh1>
        <StyledP>
          Layanan Booking Dokter Hewan Terbaik di Indonesia <br />
          Chat dokter, beli obat, cek lab dan update informasi seputar kesehatan <br />
          semua bisa di Slivadoc!
        </StyledP>
        
        <Search />
        <StyledHref href="#">Lihat Semua Dokter</StyledHref>

      </div>
      <div style={{ minWidth: "500px", position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://images.unsplash.com/photo-1679000631940-4fab43b817d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </div>
    </StyledAbout>
  );
};

export default AboutSection;

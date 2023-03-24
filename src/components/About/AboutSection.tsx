import React from "react";
import styled from "styled-components";
import { HeroImageWrapper, StyledAbout } from "./AboutStyle";
import Search from "../Search/Search";
import { StyledH1 } from "../FontStyle/Font";

const StyledP = styled.p(
  ({ theme }) => `
  color:${theme.colors.txtSecondary};
  font-weight:${theme.fontWeights.bold}
  font-size:clamp(.5rem,4vw,1rem);
`
);

const StyledHref = styled.a(
  ({ theme }) => `
  color:${theme.colors.txtSecondary};
  text-decoration:none;
  font-weight:${theme.fontWeights.light};
  font-size:${theme.fontSizes.small};

`
);

const AboutSection: React.FC = () => {
  return (
    <StyledAbout>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
        <StyledH1>
          Solusi <br /> Kesehatan Hewan <br />
          Terlengkap
        </StyledH1>
        <StyledP>
          Layanan Booking Dokter Hewan Terbaik di Indonesia <br />
          Chat dokter, beli obat, cek lab dan update informasi seputar kesehatan{" "}
          <br />
          semua bisa di Slivadoc!
        </StyledP>

        <Search />
        <StyledHref href="#">Lihat Semua Dokter</StyledHref>
      </div>
      <HeroImageWrapper>
        <img
          style={{ width: "100%" }}
          src="/banner-pets.png"
          alt="Banner Pets"
        />
      </HeroImageWrapper>
    </StyledAbout>
  );
};

export default AboutSection;

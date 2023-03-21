import React from "react";
import { Container } from "../Container";
import { GridRow } from "../GridRow";
import RowHeader from "../RowHeader";
import { SVGBox } from "../SVGBox";

const RecommendationSection = () => {
  return (
    <Container style={{ padding: "2rem 1rem" }}>
      <RowHeader title="Rekomendasi Hewan Terbaik" />
      <p style={{ margin: "1rem 0", color: "gray", fontSize: "12px" }}>
        Dapatkan informasi seputar jenis hewan kesukaan anda disini
      </p>
      <GridRow>
        <SVGBox>
          <img src="dog-svg.png" />
          <p>Anjing</p>
        </SVGBox>
        <SVGBox>
          <img src="cat-svg.png" />
          <p>Cat</p>
        </SVGBox>
        <SVGBox>
          <img src="hamster-svg.png" />
          <p>Hamster</p>
        </SVGBox>
        <SVGBox>
          <img src="porcupine-svg.png" />
          <p>Landak Mini</p>
        </SVGBox>
        <SVGBox>
          <img src="rabbit-svg.png" />
          <p>Kelinci</p>
        </SVGBox>
        <SVGBox>
          <img src="dove-svg.png" />
          <p>Burung</p>
        </SVGBox>
        <SVGBox>
          <img src="fish-svg.png" />
          <p>Ikan</p>
        </SVGBox>
      </GridRow>
    </Container>
  );
};

export default RecommendationSection;

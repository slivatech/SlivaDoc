import React from "react";
import { Container } from "../Container";
import { GridRow } from "../GridRow";
import RowHeader from "../RowHeader";
import { SVGBox } from "../SVGBox";

const RecommendationSection = () => {
  return (
    <Container style={{ padding: "2rem 8%" }}>
      <RowHeader title="Rekomendasi Hewan Terbaik" />
      <p style={{ margin: "1rem 0", color: "gray", fontSize: "12px" }}>
        Dapatkan informasi seputar jenis hewan kesukaan anda disini
      </p>
      <GridRow>
        <SVGBox>
          <img src="dog-svg.png" alt="Animal Recomendation" />
          <p>Anjing</p>
        </SVGBox>
        <SVGBox>
          <img src="cat-svg.png" alt="Animal Recomendation" />
          <p>Cat</p>
        </SVGBox>
        <SVGBox>
          <img src="hamster-svg.png" alt="Animal Recomendation" />
          <p>Hamster</p>
        </SVGBox>
        <SVGBox>
          <img src="porcupine-svg.png" alt="Animal Recomendation" />
          <p>Landak Mini</p>
        </SVGBox>
        <SVGBox>
          <img src="rabbit-svg.png" alt="Animal Recomendation" />
          <p>Kelinci</p>
        </SVGBox>
        <SVGBox>
          <img src="dove-svg.png" alt="Animal Recomendation" />
          <p>Burung</p>
        </SVGBox>
        <SVGBox>
          <img src="fish-svg.png" alt="Animal Recomendation" />
          <p>Ikan</p>
        </SVGBox>
      </GridRow>
    </Container>
  );
};

export default RecommendationSection;

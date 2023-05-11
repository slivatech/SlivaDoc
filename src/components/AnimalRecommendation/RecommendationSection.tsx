import React from "react";
import { Container } from "../Container";
import { GridRow } from "../GridRow";
import RowHeader from "../RowHeader";
import { SVGBox } from "../SVGBox";

const recom = [
  {
    id: 1,
    img: "./assets/dog-svg.png",
    text: "Anjing",
  },
  {
    id: 2,
    img: "./assets/cat-svg.png",
    text: "Kucing",
  },
  {
    id: 3,
    img: "./assets/hamster-svg.png",
    text: "Hamster",
  },
  {
    id: 4,
    img: "./assets/porcupine-svg.png",
    text: "Landak Mini",
  },
  {
    id: 5,
    img: "./assets/rabbit-svg.png",
    text: "Kelinci",
  },
  {
    id: 6,
    img: "./assets/dove-svg.png",
    text: "Burung",
  },
  {
    id: 7,
    img: "./assets/fish-svg.png",
    text: "Ikan",
  },
];

const RecommendationSection = () => {
  return (
    <Container style={{ padding: "2rem 8%", borderRadius: "50%" }}>
      <RowHeader title="Rekomendasi Hewan Terbaik" />
      <p style={{ margin: "1rem 0", color: "gray", fontSize: "12px" }}>
        Dapatkan informasi seputar jenis hewan kesukaan anda disini
      </p>
      <GridRow>
        {recom?.map((data) => (
          <SVGBox key={data.id}>
            <img src={data.img} alt="Animal Recomendation" />
            <p>{data.text}</p>
          </SVGBox>
        ))}
      </GridRow>
    </Container>
  );
};

export default RecommendationSection;

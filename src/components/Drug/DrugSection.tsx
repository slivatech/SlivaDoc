import React from "react";
import { GridRow } from "../GridRow";
import RowHeader from "../RowHeader";
import { StyledDrug } from "./DrugStyle";
import { SVGBox } from "../SVGBox";

const medicine = [
  {
    id: 1,
    img: "./assets/fever.png",
    text: "Demam",
  },
  {
    id: 2,
    img: "./assets/digestion.png",
    text: "Pencernaan",
  },
  {
    id: 3,
    img: "./assets/jack-wolf.png",
    text: "Kulit",
  },
  {
    id: 4,
    img: "./assets/flu.png",
    text: "Flu",
  },
  {
    id: 5,
    img: "./assets/fever.png",
    text: "Demam",
  },
  {
    id: 6,
    img: "./assets/fever.png",
    text: "Demam",
  },
];

const DrugSection = () => {
  return (
    <StyledDrug>
      <RowHeader title="Obat dan Vitamin" />
      <p style={{ margin: "0.8rem 0", color: "gray", fontSize: "12px" }}>
        Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat
        dan vitamin disini
      </p>
      <GridRow>
        {medicine?.map((data) => (
          <SVGBox key={data.id}>
            <img src={data.img} alt="DrugSection" />
            <p>{data.text}</p>
          </SVGBox>
        ))}
      </GridRow>
    </StyledDrug>
  );
};

export default DrugSection;

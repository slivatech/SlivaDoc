import React from "react";
import { GridRow } from "../GridRow";
import RowHeader from "../RowHeader";
import {  StyledDrug } from "./DrugStyle";
import { SVGBox } from "../SVGBox";

const DrugSection = () => {
  return (
    <StyledDrug>
      <RowHeader title="Obat dan Vitamin" />
      <p style={{ margin: "1rem 0", color: "gray", fontSize: "12px" }}>
        Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat
        dan vitamin disini
      </p>
      <GridRow>
        <SVGBox>
          <img src="fever.png" />
          <p>Demam</p>
        </SVGBox>
        <SVGBox>
          <img src="digestion.png" />
          <p>Pencernaan</p>
        </SVGBox>
        <SVGBox>
          <img src="jack-wolf.png" />
          <p>Kulit</p>
        </SVGBox>
        <SVGBox>
          <img src="flu.png" />
          <p>Flu</p>
        </SVGBox>
        <SVGBox>
          <img src="fever.png" />
          <p>Demam</p>
        </SVGBox>
        <SVGBox>
          <img src="fever.png" />
          <p>Demam</p>
        </SVGBox>
      </GridRow>
    </StyledDrug>
  );
};

export default DrugSection;

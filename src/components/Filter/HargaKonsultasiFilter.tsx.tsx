import React from "react";
import styled from "styled-components";

interface HargaKonsultasiFilterProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  value: string;
  onChange: (value: string) => void;
}

const HargaKonsultasiFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 0.625rem;
`;

const Radio = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.label``;

const HargaKonsultasiFilter: React.FC<HargaKonsultasiFilterProps> = ({
  selectedValue,
  onValueChange,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <HargaKonsultasiFilterContainer>
      <Label>Harga Konsultasi</Label>
      <RadioContainer>
        <Radio
          type="radio"
          id="harga-konsultasi-1"
          name="harga-konsultasi"
          value="<50000"
          checked={selectedValue === "<50000"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="harga-konsultasi-1">&lt; 50.000</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <Radio
          type="radio"
          id="harga-konsultasi-2"
          name="harga-konsultasi"
          value="50000-100000"
          checked={selectedValue === "50000-100000"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="harga-konsultasi-2">50.000 - 100.000</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <Radio
          type="radio"
          id="harga-konsultasi-3"
          name="harga-konsultasi"
          value=">=100000"
          checked={selectedValue === ">=100000"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="harga-konsultasi-3">&gt;= 100.000</RadioLabel>
      </RadioContainer>
    </HargaKonsultasiFilterContainer>
  );
};

export default HargaKonsultasiFilter;

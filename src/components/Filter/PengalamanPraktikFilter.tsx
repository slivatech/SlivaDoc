import React from "react";
import styled from "styled-components";

interface PengalamanPraktikFilterProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  value: string;
  onChange: (value: string) => void;
}

const PengalamanPraktikFilterContainer = styled.div`
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

const PengalamanPraktikFilter: React.FC<PengalamanPraktikFilterProps> = ({
  selectedValue,
  onValueChange,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <PengalamanPraktikFilterContainer>
      <Label>Pengalaman Praktik</Label>
      <RadioContainer>
        <Radio
          type="radio"
          id="pengalaman-praktik-1"
          name="pengalaman-praktik"
          value="<5"
          checked={selectedValue === "<5"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="pengalaman-praktik-1">5 Tahun</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <Radio
          type="radio"
          id="pengalaman-praktik-2"
          name="pengalaman-praktik"
          value="5-10"
          checked={selectedValue === "5-10"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="pengalaman-praktik-2">5 - 10 Tahun</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <Radio
          type="radio"
          id="pengalaman-praktik-3"
          name="pengalaman-praktik"
          value=">10"
          checked={selectedValue === ">10"}
          onChange={handleRadioChange}
        />
        <RadioLabel htmlFor="pengalaman-praktik-3"> 10 Tahun</RadioLabel>
      </RadioContainer>
    </PengalamanPraktikFilterContainer>
  );
};

export default PengalamanPraktikFilter;

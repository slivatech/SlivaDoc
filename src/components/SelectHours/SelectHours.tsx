import React, { useState } from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

const OptionWrapper = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? "#333" : "#f2f2f2")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const SelectHours: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleOptionClick = (selectedValue: string) => {
    if (selectedValue !== value) {
      onChange(selectedValue);
    }
  };

  return (
    <Wrapper>
      {options.map((option) => (
        <OptionWrapper
          key={option.value}
          isSelected={option.value === value}
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
        </OptionWrapper>
      ))}
    </Wrapper>
  );
};

export default SelectHours;

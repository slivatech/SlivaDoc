import React, { useState, useEffect } from "react";
import useSelect from "../../Hooks/useSelect";
import {
  DropdownItem,
  DropdownStyle,
  SelectContainer,
  SelectLabelButton,
} from "./SelectStyle";

interface ISelect {
  label: string;
  values: any;
  onChange: (value: string) => void;
  iconEnd?: any;
  iconStart?: any;
  borderType?: "bottom" | "top";
  radius?: string;
  padding?: string;
  border?: string;
}
const Select = ({
  label,
  values,
  iconStart,
  onChange,
  iconEnd,
  radius,
  borderType,
  border,
  padding,
}: ISelect) => {
  const { currentValue, handleOpen, open, handleChange } = useSelect();

  return (
    <SelectContainer>
      <SelectLabelButton
        padding={padding}
        onClick={handleOpen}
        borderType={borderType}
        radius={radius}
        border={border}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {iconStart}
          <p>{currentValue !== "" ? currentValue : label}</p>
          <p>{currentValue !== "" ? currentValue : label}</p>
        </div>
        {iconEnd}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value: any, index: number) => (
          <DropdownItem
            onClick={() => {
              handleChange(value);
            }}
            active={value === currentValue}
            key={index}
          >
            {value}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select;

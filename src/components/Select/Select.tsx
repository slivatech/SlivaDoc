import React, { useState, useEffect } from "react";
import useSelect from "../../hooks/useSelect";
import {
  DropdownItem,
  DropdownStyle,
  SelectContainer,
  SelectLabelButton,
} from "./SelectStyle";
import useClickOutside from "../../hooks/useClickOutside";

interface ISelect {
  label: string;
  values: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconEnd?: any;
  iconStart?: any;
  borderType?: "bottom" | "top";
  radius?: string;
  padding?: string;
  border?: string;
  background?: string;
  defaultValue?: string;
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
  background,
  defaultValue,
}: ISelect) => {
  const { currentValue, handleOpen, open, handleChange, handleClose } =
    useSelect();

  const ref = useClickOutside<HTMLDivElement>(() => {
    handleClose();
  });

  return (
    <SelectContainer onClick={(e) => e.preventDefault()} ref={ref}>
      <SelectLabelButton
        padding={padding}
        onClick={handleOpen}
        background={background}
        borderType={borderType}
        radius={radius}
        border={border}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {iconStart}
          <p>
            {currentValue !== ""
              ? currentValue
              : defaultValue
              ? defaultValue
              : label}
          </p>
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

import React, { useState, useEffect } from "react";
import useSelect from "../../hooks/useSelect";
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
  background?: string;
  defaultValue?: string;
  [x: string]: any;
}
const Select = ({
  label,
  values,
  iconStart,
  onChange,
  iconEnd,
  radius,
  borderType,
  defaultValue,
  background,
  border,
  padding,

  ...rest
}: ISelect) => {
  const [currentValue, setCurrentValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value: string) => {
    setCurrentValue(value);
  };
  const handleChange = (value: string) => {
    handleValueChange(value);
    onChange(value);
    // call method, if it exists
    // if (onChange) onChange(value);
    // close, after all tasks are finished
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectLabelButton
        {...rest}
        padding={padding}
        onClick={(e) => {
          handleOpen();
          e.preventDefault();
        }}
        borderType={borderType}
        radius={radius}
        background={background}
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

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
  defaultValue?:string
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
  border,
  padding,
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
        padding={padding}
        onClick={handleOpen}
        borderType={borderType}
        radius={radius}
        border={border}
      >
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          {iconStart}
          <p>{currentValue !== "" ? currentValue : defaultValue ? defaultValue : label}</p>
        </div>
        {iconEnd}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value: any, index: number) => (
          <DropdownItem
            onClick={() => {
              handleChange(value)
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

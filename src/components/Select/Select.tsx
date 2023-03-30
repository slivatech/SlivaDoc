import React, { useState } from "react";
import useSelect from "../../hooks/useSelect";
import { DropdownItem, DropdownStyle, SelectContainer, SelectLabelButton } from "./SelectStyle";

interface ISelect {
  label: string;
  values: string[];
  onChange?: (e: React.ChangeEvent) => void;
  icon?:any;
  borderType?:"bottom" | "top";
  radius?:string;
  border?:string;
}
const Select = ({ label, values, onChange,icon,radius,borderType,border }: ISelect) => {

    const { currentValue,handleOpen,open,handleChange } = useSelect();
   return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen} borderType={borderType} radius={radius} border={border}>
        <p>{currentValue !== "" ? currentValue : label}</p>
        {icon}
        
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
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

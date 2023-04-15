import React, { useState } from "react";
import useSelect from "../../hooks/useSelect";
import { DropdownItem, DropdownStyle, SelectContainer, SelectLabelButton } from "./SelectStyle";

interface ISelect {
  label: string;
  values: string[];
  onChange?: (e: React.ChangeEvent) => void;
  iconEnd?:any;
  iconStart?:any;
  borderType?:"bottom" | "top";
  radius?:string;
  border?:string;
}
const Select = ({ label, values, iconStart,onChange,iconEnd,radius,borderType,border }: ISelect) => {

    const { currentValue,handleOpen,open,handleChange } = useSelect();
   return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen} borderType={borderType} radius={radius} border={border}>
        <div style={{display:"flex",alignItems:'center',gap:".5rem"}}>
          {iconStart}
        <p>{currentValue !== "" ? currentValue : label}</p>

        </div>
        {iconEnd}
        
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

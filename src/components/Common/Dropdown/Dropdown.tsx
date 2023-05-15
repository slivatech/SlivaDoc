import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

type DropdownWrapProps = {
  width: string;
};

const DropdownWrap: any = styled.div<DropdownWrapProps>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => width};
  min-width: 100px;
  cursor: pointer;
  /* background-color: red; */
  /* height: 50px; */
`;

const Label = styled.label`
  min-width: 150px;
  background-color: red;
`;
type DropdownLabelProps = {
  height: string;
  border: string;
  fontSize: string;
};

const DropdownLabel: any = styled.div<DropdownLabelProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: ${({ border }) => border || "1px solid black"};
  width: 100%;
  padding: 0px 5px;
  border-radius: 3px;
  height: ${({ height }) => height};
  background-color: transparent;

  .first {
    font-size: ${({ fontSize }) => fontSize};
  }

  .second {
    display: flex;
    align-items: center;
    gap: 10px;

    .flag {
      width: 18px;
      height: auto;
    }
    img {
      width: 10px;
      height: 7px;
    }
  }
`;

type DropdownContentProps = {
  display: boolean;
  width?: string;
  fontSize: string;
};

const DropdownContent: any = styled.div<DropdownContentProps>`
  display: ${({ display }) => (display ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  margin-top: 5px;
  left: 0;
  right: 0;
  /* width: 200px; */

  div {
    color: black;
    padding: 3px;
    font-size: ${({ fontSize }) => fontSize};
    /* width:inherit; */
    text-decoration: none;

    /* &:hover {
            background-color: #767676;
            overflow: hidden;
            color: white;
        } */
  }

  div:first-child {
    border-radius: 10px 10px 0px 0px;
  }

  div:last-child {
    border-radius: 0px 0px 10px 10px;
  }
`;

const CheckboxInput = styled.input`
  &:checked + ${Label} > ${DropdownContent} {
    display: block;
  }
`;
interface DropdownProps {
  options: any;
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  fontSize?: string;
  value?: any;
  setValue?: any;
  icon?: any;
}
const Dropdown: React.FC<DropdownProps> = ({
  options,
  width,
  height,
  border,
  backgroundColor,
  fontSize,
  value,
  setValue,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsChecked(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <DropdownWrap
      className="dropdown"
      ref={ref}
      width={width}
      onClick={() => setIsChecked(!isChecked)}
    >
      {/* <CheckboxInput type='checkbox' id='tes' checked={isChecked} hidden />
            <Label htmlFor='tes'> */}
      <DropdownLabel height={height} border={border} fontSize={fontSize}>
        <div className="first">{value || options[0]?.value}</div>
        <div className="second">
          <div>{icon ? icon : ""}</div>
          <img src="./assets/downArrow.png" alt="" />
        </div>
      </DropdownLabel>
      <DropdownContent display={isChecked} fontSize={fontSize}>
        {options?.map((data: any, idx: number) => (
          <div
            key={idx}
            onClick={(e: any) => {
              setValue(e.target.textContent);
            }}
          >
            {data?.value}
          </div>
        ))}
      </DropdownContent>
      {/* </Label> */}
    </DropdownWrap>
  );
};

export default Dropdown;

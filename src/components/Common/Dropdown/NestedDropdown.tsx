import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import arrow from '../../../assets/icon/downArrow.png'

type DropdownWrapProps = {
  width: string;
};

const DropdownWrap: any = styled.div<DropdownWrapProps>`
    position: relative;
    display: inline-block;
    width: ${({ width }) => width};
    min-width: 100px;
    cursor: pointer;
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

  div {
    color: black;
    padding: 3px;
    font-size: ${({ fontSize }) => fontSize};
    /* width:inherit; */
    text-decoration: none;
  }

  div:first-child {
    border-radius: 10px 10px 0px 0px;
  }

  div:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  ul {
    border: 1px solid #d1d5db;
    display: none;
    left: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
}
  .hidden {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        ul {
            display: block;
        }
    }

    li {
        display: flex;
    }
  }

  
`;

const CheckboxInput = styled.input`
  &:checked + ${Label} > ${DropdownContent} {
    display: block;
  }
`;
interface DropdownProps {
  options?: any;
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  fontSize?: string;
  value?: any;
  setValue?: any;
  icon?: any;
}

const NestedDropdown: React.FC<DropdownProps> = ({
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
      <DropdownLabel height={height} border={border} fontSize={fontSize}>
        <div className="first">Select Filter</div>
        <div className="second">
          <img src={arrow} alt="" />
        </div>
      </DropdownLabel>
      <DropdownContent display={isChecked} fontSize={fontSize}>
        {options?.map((data: any, idx: number) => (
            <div className="hidden">
                <div
                    key={idx}
                >
                    {data?.value}
                </div>
                <div>{'>'}</div>
                <ul>
                {data?.option.map((data: any, idx: number) => (
                    <li
                    key={idx}
                    onClick={(e: any) => {
                        setValue(e.target.textContent);
                      }}
                    >
                        <CheckboxInput type="checkbox" id="checkbox" />
                        <Label htmlFor="checkbox">{data?.value}</Label>
                    </li>
                ))}
                </ul>
            </div>
        ))}
      </DropdownContent>
    </DropdownWrap>
  );
};

export default NestedDropdown;

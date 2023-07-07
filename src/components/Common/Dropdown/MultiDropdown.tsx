import React from 'react'
import Dropdown from 'react-multilevel-dropdown';
import styled from "styled-components";
import arrow from '../../../assets/icon/downArrow.png'

type DropdownWrapProps = {
    width?: string;
};

const DropdownWrap = styled(Dropdown)<DropdownWrapProps>`
    border: 1px solid red;
    background-color: transparent;
    width: ${({ width }) => width};
    min-width: 100px;
    cursor: pointer;
    padding: 0px 5px;
    img {
        width: 10px;
        height: 7px;
    }
`


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


const MultiDropdown : React.FC<DropdownProps> = ({options,
    width,
    height,
    border,
    backgroundColor,
    fontSize,
    value,
    setValue,
    icon,}) => {
  return (
    <>
        <DropdownWrap
            title={<span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>{value || options[0]?.value} <img src={arrow} style={{flexShrink: 0}} alt="" /></span>}
            position='right'
            width={width}
        >
            {options?.map((data: any, idx: number) => (
                <Dropdown.Item key={idx}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <p>{data?.value}</p>
                        <span>{'>'}</span>
                    </div>
                    <Dropdown.Submenu
                        position='right'
                    >
                        {data?.option.map((data: any, idx: number) => (
                            <Dropdown.Item key={idx}>
                                <input type="checkbox" value={data?.value} style={{marginRight: '5px'}} />
                                {data?.value}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Submenu>
                </Dropdown.Item>
            ))}
        </DropdownWrap>
    </>
  )
}

export default MultiDropdown
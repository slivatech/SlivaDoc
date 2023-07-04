import React from 'react'
import styled from 'styled-components';

type Tabstyle = {
    active?: any;
}

const Tab = styled.button<Tabstyle>`
  font-size: 14px;
  padding: 10px 28px;
  cursor: pointer;
  color: #06152B;
  opacity: 0.8;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  ${({ active }) =>
    active &&
    `
    background-color: #3A36DB;
    color: #fff;
    opacity: 1;
    border-radius: 10px;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  background-color: #fff;
  width: fit-content;
  border-radius: 10px;
`;

export type TTab = {
    id: string | number;
    label?: string | number;
};

interface TabsProps {
    children?: any;
    active?: any,
    setActive?: any,
    types?: any,
}

const TabGroup : React.FC<TabsProps> = ({active, setActive, types}) => {
  return (
    <>
        <ButtonGroup>
            {types.map((type:TTab) => (
            <Tab
                key={type.id}
                active={active === type.id}
                onClick={() => setActive(type.id)}
            >
                {type.label}
            </Tab>
            ))}
        </ButtonGroup>
    </>
  )
}

export default TabGroup
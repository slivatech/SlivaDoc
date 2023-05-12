import React, { useState } from 'react'
import styled from 'styled-components';

type Tabstyle = {
    active?: any;
}

const Tab = styled.button<Tabstyle>`
  font-size: 14px;
  padding: 10px 28px;
  cursor: pointer;
  color: #06152B;
  opacity: 0.6;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 0 10px 10px 0;
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

const TabContainer = styled.div`
    width: 100%
`

interface TabsProps {
    children?: any;
    active?: any,
    setActive?: any,
    types?: any,
    id?: number,
}

const types = ['Cash', 'Credit Card'];

const TabContent = (props:TabsProps) => {
    return (
        props.active === props.id ?
        <TabContainer>
            {props.children}
        </TabContainer>
        : null
    )
}

const TabGroup = () => {
    const [active, setActive] = useState(types[0])
  return (
    <div style={{margin: '5rem', background: '#F1F4FA'}}>
        <ButtonGroup>
            {types.map((type:any) => (
            <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
            >
                {type}
            </Tab>
            ))}
        </ButtonGroup>
        {types.map((type:any, index: number) => (
            <TabContent
                active={active}
                id={index}
            >
                alalla
            </TabContent>
        ))}
    </div>
  )
}
// const TabGroup : React.FC<TabsProps> = ({children, active, setActive, types}) => {
//   return (
//     <div style={{margin: '5rem', background: '#F1F4FA'}}>
//         <ButtonGroup>
//             {types.map((type:any) => (
//             <Tab
//                 key={type}
//                 active={active === type}
//                 onClick={() => setActive(type)}
//             >
//                 {type}
//             </Tab>
//             ))}
//         </ButtonGroup>
//         <TabContent>
//            {children}
//         </TabContent>
//     </div>
//   )
// }

export default TabGroup
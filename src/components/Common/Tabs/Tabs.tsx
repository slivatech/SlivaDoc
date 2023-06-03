import React, { useState } from "react";
import styled from "styled-components";

type Tab = {
  title: string;
  render: () => React.ReactNode;
};

interface TabProps {
  tabs: Tab[];
}
const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <Title active={activeTab === index}>{tab.title}</Title>
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  );
};

const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
`;
const TabButton = styled.button<{ active: boolean }>`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const Title = styled.span<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  font-size: 20px;
  transition: 0.6s;
  color: #1c1c1c;
  font-weight: ${(props) => (props.active ? 700 : 500)};
`;
const Indicator = styled.span<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-width: ${(props) => (props.active ? "2px" : "1px")};
  border-bottom-style: solid;
  border-bottom-color: ${(props) =>
    props.active ? "rgba(25, 96, 203,0.6)" : "rgba(28, 28, 28, 0.322)"};
`;

export default Tabs;

import { useState } from "react";
import Tab from "./Tab";
import { ClinicWrapper, StyledClinicNav, StyledLi } from "./TabSectionStyle";

type TabTypes = "informasi" | "Ulasan";

const tabs: TabTypes[] = ["informasi", "Ulasan"];

const TabSection = () => {
  const [curTab, setCurTab] = useState<TabTypes>("informasi");

  return (
    <StyledClinicNav>
      <ClinicWrapper>
        {tabs.map((tab, i) => (
          <StyledLi
            key={i}
            onClick={() => setCurTab(tab)}
            isActive={curTab === tab}
          >
            {tab}
          </StyledLi>
        ))}
      </ClinicWrapper>
      <Tab tab={curTab} />
    </StyledClinicNav>
  );
};

export default TabSection;

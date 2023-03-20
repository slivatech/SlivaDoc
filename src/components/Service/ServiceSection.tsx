import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import NavButtons from "../NavButtons/NavButtons";
import { servicesList } from "./data";
import { Service, ServiceGrid, ServiceStyle } from "./ServiceStyle";



const StyledHref = styled.a`
  font-weight: 500;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  color: #454467;
  background-color: #e7ebf0;
  font-weight: 700;
  box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
`;






const ServiceSection: FC = () => {
  return (
    <ServiceStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Layanan SlivaDoc</h1>
        <StyledHref>Lihat Semua</StyledHref>
      </div>

      <ServiceGrid>
        {servicesList.map((service)=>(
            <Service>
                <img style={{ borderRadius:"10px",maxHeight:"200px",objectFit:"cover" }} src={service.imageSrc} />
                <p>{service.title}</p>
            </Service>
        ))}
      </ServiceGrid>
    </ServiceStyle>
  );
};

export default ServiceSection;

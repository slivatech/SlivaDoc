import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import NavButtons from "../NavButtons/NavButtons";
import RowHeader from "../RowHeader";
import { servicesList } from "./data";
import { ServiceButton, ServiceGrid, ServiceStyle } from "./ServiceStyle";



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
      <RowHeader title="Layanan SlivaDoc" />


      <ServiceGrid>
        {servicesList.map((service)=>(
            <ServiceButton>
                <img style={{ borderRadius:"5px",maxHeight:"200px",objectFit:"cover",maxWidth:"200px" }} src={service.imageSrc} />
                <p>{service.title}</p>
            </ServiceButton>
        ))}
      </ServiceGrid>
    </ServiceStyle>
  );
};

export default ServiceSection;

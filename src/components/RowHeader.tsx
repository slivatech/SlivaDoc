import React from "react";
import styled from "styled-components";
import { StyledH3 } from "./FontStyle/Font";

const StyledHref = styled.a`
  font-weight: 400;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  color: #454467;
  background-color: #e7ebf0;
  border-radius: 5px;
  font-weight: 700;
  box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  transition: all 0.1s linear;
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(144, 170, 209, 1) 0%,
      rgba(82, 150, 229, 1) 100%
    );
    color: white;
  }
`;

const RowHeader = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledH3>{title}</StyledH3>

      <StyledHref>Lihat Semua</StyledHref>
    </div>
  );
};

export default RowHeader;

import React from "react";
import styled from "styled-components";

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

const RowHeader = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>

      <StyledHref>Lihat Semua</StyledHref>
    </div>
  );
};

export default RowHeader;

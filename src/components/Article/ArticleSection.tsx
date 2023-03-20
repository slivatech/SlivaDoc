import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import { StyledArticle } from "./ArticleStyled";

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

const StyledP = styled.p(
  ({ theme }) => `
      color:${theme.colors.txtSecondary};
      font-size:${theme.fontSizes.small};
  
  `
);

const buttonList: string[] = [
  "Terbaru",
  "Populer",
  "Kesehatan Mental",
  "Sehat dan Bugar",
  "Kehamilan",
  "Terbaru",
  "Kesehatan Kulit",
];

const ArticleSection = () => {
  return (
    <StyledArticle>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Baca Artikel Kesehatan</h1>
        <StyledHref>Lihat Semua Kategori</StyledHref>
      </div>
      <StyledP>Informasi kesehatan terpercaya hanya untukmu</StyledP>
      <GroupButtons>
        {buttonList.map((button) => (
          <Button
            color="white"
            text={button}
            bgColor="linear-gradient(360deg, rgba(146,172,210,1) 21%, rgba(235,235,235,1) 100%);"
          />
        ))}
      </GroupButtons>
    </StyledArticle>
  );
};

export default ArticleSection;

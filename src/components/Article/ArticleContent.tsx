import React from "react";
import { StyledH3 } from "../FontStyle/Font";
import { Article, ArticleBanner, TextArticle } from "./ArticleStyled";

interface IContent {
  header:string;
  subheader:string;
}

const ArticleContent = ({ header,subheader }:IContent) => {
  return (

      <TextArticle>
        <StyledH3>{header}</StyledH3>
        <p style={{ fontWeight:"normal" }}>{subheader}</p>
        <p style={{ fontSize: "clamp(10px,4vw,12px)", color: "gray", }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio
          corporis cupiditate porro, eveniet dolores.
        </p>
        <a
          href="#"
          style={{
            textDecoration: "none",
            marginTop: "1rem",
            fontSize: "clamp(10px,5vw,12px)",
          }}
        >
          Baca Selengkapnya
        </a>
      </TextArticle>
  );
};

export default ArticleContent;

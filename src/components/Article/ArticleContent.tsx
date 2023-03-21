import React from "react";
import { Article, ArticleBanner, TextArticle } from "./ArticleStyled";

interface IContent {
  header:string;
  subheader:string;
}

const ArticleContent = ({ header,subheader }:IContent) => {
  return (

      <TextArticle>
        <h3>{header}.</h3>
        <p>{subheader}</p>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio
          corporis cupiditate porro, eveniet dolores.
        </p>
        <a
          href="#"
          style={{
            textDecoration: "none",
            marginTop: "1rem",
            fontSize: "14px",
          }}
        >
          Baca Selengkapnya
        </a>
      </TextArticle>
  );
};

export default ArticleContent;

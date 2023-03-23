/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { StyledH3 } from "../FontStyle/Font";
import { TextArticle } from "./ArticleStyled";

interface IContent {
  header:string;
  subheader:string;
}

const ArticleContent = ({ header,subheader }:IContent) => {
  return (

      <TextArticle>
        <StyledH3>{header}</StyledH3>
        <StyledH3 style={{ fontWeight:"normal" }}>{subheader}</StyledH3>
        <p style={{ fontSize: "clamp(10px,4vw,12px)", color: "gray", }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in veritatis eligendi? Cumque nobis inventore ex provident odio porro voluptatem.
        </p>
        <a
          href="#"
          style={{
            textDecoration: "none",
            fontSize: "clamp(10px,5vw,12px)",
          }}
        >
          Baca Selengkapnya
        </a>
      </TextArticle>
  );
};

export default ArticleContent;

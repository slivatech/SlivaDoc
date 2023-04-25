import React from "react";
import promo from "../../assets/promo.png";
import {
  Article,
  ArticleAuthor,
  ArticleContent,
  ArticleImage,
  Sidebar,
  ArticleTitle,
  ArticleWrapper,
  CoreArticleContent,
  BannerSection,
} from "../../pages/DetailArtikel/DetailArtikelStyle";

type Props = {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  coreContent: string;
};

const ArticlePage: React.FC<Props> = ({
  title,
  author,
  date,
  content,
  image,
  coreContent,
}) => {
  return (
    <ArticleWrapper>
      <Article>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleAuthor >Ditinjau oleh  <a href='https://www.halodoc.com/cari-dokter/nama/dr-fadhli-rizal-makarim'> {author} </a>: {date}</ArticleAuthor>
      <CoreArticleContent>{coreContent}</CoreArticleContent>
      <ArticleImage src={image} alt={title} />
      <ArticleContent>{content}</ArticleContent>
      </Article>
      <Sidebar>
        <BannerSection>
          <img src={promo} alt="promo" />
        </BannerSection>
      </Sidebar>
    </ArticleWrapper>
  );
};

export default ArticlePage;

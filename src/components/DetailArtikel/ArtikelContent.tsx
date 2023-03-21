import React from "react";
import {ArticleAuthor,ArticleContent,ArticleImage,ArticleTitle,ArticleWrapper,CoreArticleContent} from '../../pages/DetailArtikelStyle'

type Props = {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  coreContent : string;
};


const ArticlePage: React.FC<Props> = ({ title, author, date, content, image ,coreContent}) => {
  return (
    <ArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleAuthor>Ditinjau oleh {author} : {date}</ArticleAuthor>
      <CoreArticleContent>{coreContent}</CoreArticleContent>
      <ArticleImage src={image} alt={title} />
      <ArticleContent>{content}
      </ArticleContent>
      
    </ArticleWrapper>
    
  );
};

export default ArticlePage;

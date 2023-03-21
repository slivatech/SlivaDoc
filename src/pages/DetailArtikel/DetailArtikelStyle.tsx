import styled from "styled-components";

const ArticleWrapper = styled.div`
  max-width: 800px;
  margin-left: 20px;
  padding: 20px;
`;

const ArticleTitle = styled.h1`
text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ArticleAuthor = styled.p`
text-align: left;
  font-size: 0.75rem;
  margin-bottom: 5px;
`;

const ArticleDate = styled.p`
text-align: left;
  margin-bottom: 5px;
`;

const ArticleImage = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 20px;
  margin-top:20px;
`;
const CoreArticleContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  font-style : italic
`;
const ArticleContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
`;

const DoctorListContainer = styled.div`
  padding: 20px;
  border-top: 2px grey;
  max-width: 20 %;
  margin-left: 20px;
`;

export {ArticleAuthor,ArticleContent,ArticleDate,ArticleImage,ArticleTitle,ArticleWrapper,CoreArticleContent,DoctorListContainer}
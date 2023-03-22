import styled from "styled-components";
import { Container } from "../Container";

export const StyledArticle = styled(Container)`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ArticleLayout = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export const ArticleBanner = styled.img<{ large?: boolean }>(
  ({ large }) => `
  max-width:${large ? "100%" : "400px"};
  
`
);

export const Article = styled.article<{ column?: boolean }>(({ column }) => `
  display:flex;
  flex-direction:${column ? "column" : "row"};
  gap:1rem;
  max-width:800px;
  align-items:${!column ? "start" : null};
  @media (max-width: 768px) {
    & > div > p {
      display:${column ? null : "none"};
    }
  }

`
);

export const TextArticle = styled.div`
  & > * {
    margin-top: 12px;
  }

`;

export const BannerSection = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  row-gap: 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

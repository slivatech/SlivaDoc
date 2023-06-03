import styled from "styled-components";
import { Container } from "../Container";

export const StyledArticle = styled(Container)`
  padding: 2rem 8%;

  & > * {
    margin-top: 0.8rem;
  }
`;

export const ArticleLayout = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export const ArticleBanner = styled.div<{ large?: boolean }>(
  ({ large }) => `
  max-width:${large ? "100%" : "300px"};
  height:${large ? null : "100%"};
  border-radius:5px;
`
);

export const Article = styled.article<{ column?: boolean }>(
  ({ column }) => `
  display:flex;
  flex-direction:${column ? "column" : "row"};
  gap:1rem;

  height:${!column ? "150px" : null};
  align-items:${!column ? "start" : null};
  @media (max-width: 768px) {
    & > div > p {
      display:${column ? null : "none"};
    }
  }

  & > div > img {
    border-radius:5px;
  }

  

`
);

export const TextArticle = styled.div`
  & > * {
    margin-bottom: 12px;
  }
`;

export const BannerSection = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  row-gap: 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
  & > img {
    margin-top: 1rem;
  }
  height: 100%;
  max-width: 500px;
`;

type BannerAdsProps = {
  height?: string;
  width?: string;
}

export const BannerAds:any = styled.img<BannerAdsProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: 5px;
  object-fit: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;

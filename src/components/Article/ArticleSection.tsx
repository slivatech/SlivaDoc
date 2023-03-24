import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import RowHeader from "../RowHeader";
import ArticleContent from "./ArticleContent";
import {
  Article,
  ArticleBanner,
  ArticleLayout,
  BannerAds,
  BannerSection,
  StyledArticle,
} from "./ArticleStyled";

const MainArticleWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  max-height: 800px;
`;
const SecondaryArticleWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  max-height: "auto";
  @media (max-width: 1024px) {
    max-height: "600px";
  }
`;

const MainArticleContainer = styled.div`
  flex: 0.6;
  @media (max-width: 1024px) {
    flex: 1;
  }
  height: 100%;
`;

const ListArticleContainer = styled.div`
  flex: 0.6;
  @media (max-width: 1024px) {
    flex: 1;
    & > * {
      border-top: 1px solid #8b96a5;
      padding: 1rem 0;
    }
  }
  & > * {
    margin-top: 1rem;
  }
  & a {
    display: none;
  }
  /* height: 100%; */
`;

const AdsWrapper = styled.div`
  flex: 0.4;
  max-height: 600px;
  @media (max-width: 1024px) {
    display: none;
  }
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
      <RowHeader title="Baca Artikel Kesehatan" />
      <StyledP>Informasi kesehatan terpercaya hanya untukmu</StyledP>
      <GroupButtons>
        {buttonList.map((button, i) => (
          <Button text={button} key={i} active={false} />
        ))}
      </GroupButtons>
      <ArticleLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
            flex: 1,
            marginTop: "1rem",
          }}
        >
          {/* main article */}
          <MainArticleWrapper>
            <MainArticleContainer>
              <Article column={true}>
                <ArticleBanner large={true}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/promo-banner.png"
                    alt="promoBanner"
                  />
                </ArticleBanner>
                <ArticleContent
                  subheader="Makanan sehat"
                  header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
                />
              </Article>
            </MainArticleContainer>
            <AdsWrapper>
              <BannerAds src="/peliharaan.png" />
            </AdsWrapper>
          </MainArticleWrapper>
          <SecondaryArticleWrapper>
            <ListArticleContainer>
              <Article>
                <ArticleBanner>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="/allergic.png"
                    alt="allertgic"
                  />
                </ArticleBanner>
                <ArticleContent
                  subheader="Makanan sehat"
                  header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
                />
              </Article>
              <Article>
                <ArticleBanner>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="/allergic-2.png"
                    alt="allergic-2"
                  />
                </ArticleBanner>
                <ArticleContent
                  subheader="Makanan sehat"
                  header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
                />
              </Article>
              <Article>
                <ArticleBanner>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="/allergic-3.png"
                    alt="allergic-3"
                  />
                </ArticleBanner>
                <ArticleContent
                  subheader="Makanan sehat"
                  header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
                />
              </Article>
            </ListArticleContainer>
            <BannerSection>
              <BannerAds src="/petshop.png" />
              <BannerAds src="/pet-services.png" />
            </BannerSection>
          </SecondaryArticleWrapper>
        </div>
      </ArticleLayout>
    </StyledArticle>
  );
};

export default ArticleSection;

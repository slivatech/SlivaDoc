import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { GroupButtons } from "../GroupButtons/GroupButtons";
import RowHeader from "../RowHeader";
// import SwiperWrapper from "../SwiperWrapper/SwiperWrapper";
import ArticleContent from "./ArticleContent";
import {
  Article,
  ArticleBanner,
  ArticleLayout,
  BannerAds,
  BannerSection,
  StyledArticle,
} from "./ArticleStyled";
import "swiper/css";

// import { SwiperSlide } from "swiper/react";

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
    margin-top: 2rem;
  }
  & a {
    display: none;
  }
  /* height: 100%; */
`;

const AdsWrapper = styled.div`
  flex: 0.4;
  max-height: 100%;
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

const article = [
  {
    img: "./assets/allergic.png",
    alt: "allergic",
    header: 'Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda',
    subHeader: 'Makanan sehat'
  },
  {
    img: "./assets/allergic-2.png",
    alt: "allergic-2",
    header: 'Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda',
    subHeader: 'Makanan sehat'
  },
  {
    img: "./assets/allergic-3.png",
    alt: "allergic-3",
    header: 'Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda',
    subHeader: 'Makanan sehat'
  },
]

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
                    src="./assets/promo-banner.png"
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
              <BannerAds src="./assets/peliharaan.png" />
            </AdsWrapper>
          </MainArticleWrapper>
          <SecondaryArticleWrapper>
            <ListArticleContainer>
              {article?.map((data, idx) => (
                <Article>
                  <ArticleBanner>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={data.img}
                      alt={data.alt}
                    />
                  </ArticleBanner>
                  <ArticleContent
                    subheader={data.subHeader}
                    header={data?.header}
                  />
                </Article>
              ))}
            </ListArticleContainer>
            <BannerSection>
              <BannerAds src="./assets/petshop.png" />
              <BannerAds src="./assets/pet-services.png" />
            </BannerSection>
          </SecondaryArticleWrapper>
        </div>
      </ArticleLayout>
    </StyledArticle>
  );
};

export default ArticleSection;

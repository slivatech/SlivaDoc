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
  BannerSection,
  StyledArticle,
  TextArticle,
} from "./ArticleStyled";

const StyledHref = styled.a`
  font-weight: 500;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  color: #454467;
  background-color: #e7ebf0;
  font-weight: 700;
  box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 2px -2px 18px -10px rgba(0, 0, 0, 0.61);
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
          <Article column={true}>
            <ArticleBanner large={true} src="/promo-banner.png" />
            <ArticleContent
              subheader="Makanan sehat"
              header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
            />
          </Article>
          <Article>
            <ArticleBanner src="/allergic.png" />
            <ArticleContent
              subheader="Makanan sehat"
              header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
            />
          </Article>
          <Article>
            <ArticleBanner src="/allergic-2.png" />
            <ArticleContent
              subheader="Makanan sehat"
              header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
            />
          </Article>
          <Article>
            <ArticleBanner src="/allergic-3.png" />
            <ArticleContent
              subheader="Makanan sehat"
              header="Jenis Makanan 4 Sehat 5 Sempurna bagi Hewan Kesayangan Anda"
            />
          </Article>
        </div>
        <BannerSection>
          <img src="/peliharaan.png" />
          <img src="/petshop.png" />
          <img src="/pet-services.png" />
        </BannerSection>
      </ArticleLayout>
    </StyledArticle>
  );
};

export default ArticleSection;

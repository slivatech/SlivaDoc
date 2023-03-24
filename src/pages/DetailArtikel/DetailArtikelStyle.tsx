import styled from "styled-components";

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 100px;
  max-width: 1280px;
`;
export const Article = styled.div`
  margin-right: 160px;
  flex: 3;
  @media (max-width: 700px) {
    margin: 0;
  }
`;
export const ArticleTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
export const Button = styled.div`
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 10px;
  button {
    background: linear-gradient(180deg, #5296e5 0%, #90aad1 100%);
    color: #ffff;
    border-radius: 5px;
    padding: 10px 17px;
    border: none;
    margin-left: 222px;
  }
`;
export const ArticleAuthor = styled.p`
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 5px;
`;

export const ArticleDate = styled.p`
  text-align: left;
  margin-bottom: 5px;
`;

export const ArticleImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;
export const CoreArticleContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  font-style: italic;
`;
export const ArticleContent = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  text-align: left;
  margin-top: 19px;
`;
export const DoctorContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0 100px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 1.25;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  margin: 0 100px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin: 2px 100px;
  display: flex;
  flex-direction: column;
  letter-spacing: 0px;
  color: rgba(28, 28, 28, 0.7);
`;

export const DoctorListContainer = styled.div`
  border-top: 2px grey;
  flex: 3;
  justify-content: left;
`;

export const Consult = styled.div`
  margin-top: 26px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  padding: 40px 19px;
  background: linear-gradient(180deg, #e6eaee 0%, #cfdef3 100%);
  border-radius: 10px;
  h3 {
    margin-left: 20px;
    order: 1;
    font-size: 14px;
  }
  p {
    margin-left: 20px;
    font-size: 14px;
  }
`;

export const BannerSection = styled.div`
  height: 700px;
  width: 366px;
  left: 946px;
  top: 268px;
  border-radius: 5px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex: 1;
  margin-left: 55px;
  flex-direction: column;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SidebarTitle = styled.h3`
  padding-bottom: 1px;
  font-size: 14px;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  /* list-style: url('../../assets/icon/live.png'); */
  padding: 0;
`;

export const SidebarListItem = styled.li`
  padding: 0;
  a {
    font-weight: 300;
    font-size: 14px;
    line-height: 12px;
    text-align: center;
    color: #2c4ae8;
    text-decoration: none;
  }
`;

export const ListInfo = styled.div`
  margin-left: 14px;
  flex-wrap: wrap;

  h2 {
    font-size: 12px;
  }
  a {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #2c4ae8;
    text-decoration: none;
  }
`;
export const ListImage = styled.img`
  width: 77px;
  height: 45px;
  object-fit: cover;
  border-radius: 5px;
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 58px;
  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    border-top: 1px solid #ece4e4;
    padding-top: 17px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #ece4e4;
`;
export const Top = styled.div`
  padding: 23px 0;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 720px) {
    display: inline-block;
    flex-direction: column;
  }
`;

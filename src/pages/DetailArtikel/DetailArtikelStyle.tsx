import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
`;
export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 100px;
  max-width: 1280px;
  @media (max-width: 700px) {
    margin: 20px;
    
  }

`;
export const Article = styled.div`
   margin-right:160px;
   flex: 2;
   @media (max-width: 700px) {
    margin: 0;
  }
`;
export const ArticleTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;


export const ArticleAuthor = styled.p`
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 5px;
  a{
    color:#F91E1E;
  }

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
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0 85px;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
margin-left:100px;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  @media (max-width: 700px) {
    font-size: 18px;
    text-align: justify;
    margin: 24px 20px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  margin-left:100px;
  letter-spacing: 0px;
  color: rgba(28, 28, 28, 0.7);
  @media (max-width: 700px) {
    margin: 8px 20px;
    text-align: justify;
  }
`;

export const DoctorListContainer = styled.div`
  border-top: 2px grey;
  flex: 4;
  justify-content: left;
  
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
    text-align: left;
    align-items:left;
  }
`;
 
export const Consult = styled.div`
  margin-top: 26px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 19px;
  background: linear-gradient(180deg, #E6EAEE 0%, #CFDEF3 100%);
  border-radius: 10px;

  h3 {
    margin: 0;
    font-size: 14px;
    order: 1;

    @media screen and (max-width: 768px) {
      font-size: 12px;
      text-align: center;
      order: 2;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  p {
    margin: 0;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      font-size: 12px;
      text-align: center;
    }
  }

  button {
    background: linear-gradient(180deg, #5296E5 0%, #90AAD1 100%);
    color: #ffff;
    border-radius: 5px;
    padding: 10px 17px;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      order: 3;
      margin-top: 10px;
      width: 100%;
      justify-self: flex-end;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BannerSection = styled.div`
  height: 700px;
  width: 366px;
  margin-right:0;
  border-radius: 5px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  display: flex;
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

export const ListWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: #2C4AE8;
`

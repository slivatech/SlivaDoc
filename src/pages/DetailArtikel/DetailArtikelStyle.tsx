import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin-bottom: 3.188rem;
  display: flex;
  flex-wrap: wrap;
  width:100%;
  justify-content: center;
  
`;
export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 130px;
  margin-bottom: 70px;
  @media (max-width: 700px) {
    display: flex;
    
    width: 90%;
    
  }
`;
export const Article = styled.div`
  width:634px;
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
  a {
    color: #f91e1e;
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
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: left;
  font-style: italic;
`;
export const ArticleContent = styled.div`
  font-size: 0.85rem;
  font-weight: 520;
  line-height: 1.5;
  text-align: left;
  margin-top: 19px;
`;
export const DoctorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 180px;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
    padding: 0 16px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const Linked = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.7);
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 12px;
    
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  @media (max-width: 700px) {
    font-size: 18px;
    text-align: justify;
    margin: 24px 20px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: rgba(28, 28, 28, 0.7);
  @media (max-width: 700px) {
    margin: 8px 20px;
    text-align: justify;
  }
`;

export const DoctorListContainer = styled.div`
  padding-top:39px ;
  border-top: 1px solid #ECE4E4;
  transform: rotate(-0.18deg);
  width:580px;
    
  @media (max-width: 700px) {

    width: 100%;
    margin-left: 0;
    text-align: left;
    align-items: left;
  }
`;

export const Consult = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  height: 90px;
  align-items: center;

  flex-wrap: wrap;
  padding: 0 19px;
  background: linear-gradient(180deg, #E6EAEE 0%, #CFDEF3 100%);
  border-radius: 10px;

  img {
    padding-left: 10px;
    width: 60px;
  }

  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    @media screen and (max-width: 700px) {
      font-size: 12px;
      text-align: center;
      
      width: 100%;
      margin-bottom: 10px;
    }
  }

  p {
    font-weight: 400;
font-size: 14px;
line-height: 22px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      text-align: center;
    }
  }
 

  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
   justify-content :flex-start ;

  }
`;

export const BannerSection = styled.div`
  height: 700px;
  width: 366px;
  margin-right: 0;
  border-radius: 5px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Sidebar = styled.div`
  display: flex;
 
  flex-direction: column;
  @media (max-width: 700px) {
    display: none;
    
  }
`;

export const SidebarTitle = styled.h3`
  padding-bottom: 10px;
  font-size: 16px;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
  
`;

export const SidebarListItem = styled.li`
  padding: 0;
  list-style-type: none;
  text-decoration-line: underline;
  font-style: italic;
font-weight: 400;
font-size: 10px;
line-height: 22px;
color: #2C4AE8;

`;

export const ButtonArtikel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 10px;

  button {
    background: #eef2f6;
    box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px 17px;
    border: none;
    cursor: pointer;
  }
`;

export const ListInfo = styled.div`
  margin-left: 14px;
  flex-wrap: wrap;
  width:260px;
color: #1C1C1C;
  h2 {
    font-weight: 500;
font-size: 12px;
line-height: 15px;

  }
  a {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #2c4ae8;
    text-decoration: none;
      align-items: center;
  }
  img{
    width: 14px;
height: 13px;
margin-right: 1px;
  }
  span{
    margin-top:4px;
    display: flex;
    align-items:center;
  }
`;
export const ListImage = styled.img`
  width: 97px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin: 5px 0;
`;
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    border-top: 1px solid #ece4e4;
    padding-top: 17px;
  }
  h4{
    margin-bottom: 19px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ece4e4;
  padding:14px 0;
  
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
  margin-bottom:25px;
`

export const ButtonContainer=styled.div`
display: flex;
margin-left:auto;
justify-content: flex-end;
align-items: center;
button{
    cursor: pointer;
    background: linear-gradient(180deg, #5296E5 0%, #90AAD1 100%);
    color: #ffff;
    border-radius: 5px;
    padding: 10px 17px;
    border: none;
    @media screen and (max-width: 768px) {
      width:auto;
    }

  }
  
`;
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  button {
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    color: white;
    border: none;
    cursor: pointer;
  }

  form {
    display: flex;
    width: 85%;
    border: 1px solid #0d6efd;
    border-radius: 5px;
    @media (max-width: 720px) {
      width: 100%;
    }

    button {
      padding: 10px 23px;
      @media (max-width: 720px) {
        padding: 9px 20px;
      }
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px  0 5px 0;
  }

  .btn-all {
    padding: 11px 26px;
    border-radius: 5px;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

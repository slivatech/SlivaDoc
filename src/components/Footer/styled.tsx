import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 8%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 430px) {
    padding: 15px 5%;
    flex-direction: column;
  }
`;

export const Line = styled.hr`
  display: none;
  border: 0.2px solid #c4cbd2;

  @media (max-width: 430px) {
    display: block;
  }
`;

export const Section1 = styled.div`
  flex: 1.4;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 430px) {
    width: 68%;
    padding: 10px 0;
  }
`;

export const LogoWrap = styled.div`
  img {
    width: 130px;
  }
`;

export const TextWrap = styled.div`
  color: #505050;
  font-size: 13px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .text {
    font-size: 11px;
    font-weight: bold;
  }

  .social {
    img {
      margin-right: 5px;
      width: 25px;
      height: 25px;
    }
  }
`;

export const LinkWrap = styled(Link)`
  text-decoration: none;
  color: #8b96a5;
  font-size: 14px;

  img {
    /* scale: 0.8; */
    width: 100px;
    height: 32px;
  }
`;

export const Section2 = styled.div`
  flex: 1;
  /* max-height: 50px; */

  .title {
    font-weight: bold;
  }

  .link {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* background-color: red; */
    gap: 7px;
    margin-top: 8px;
    max-height: 100%;

    @media (max-width: 430px) {
      width: 100%;
      max-height: 80px;
    }
  }
`;

export const Section3 = styled.div`
  flex: 1;

  .title {
    font-weight: bold;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 8px;
    flex-wrap: wrap;
    width: 100%;
    max-height: 100%;

    @media (max-width: 430px) {
      width: 100%;
      max-height: 80px;
    }
  }
`;

export const Section4 = styled.div`
  flex: 1.3;

  .title {
    font-weight: bold;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 8px;

    @media (max-width: 430px) {
      gap: 15px;
    }
  }

  .collab {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .first {
      font-size: 14px;
      color: #8b96a5;
    }

    .second {
      color: #8b96a5;
      font-size: 11px;
    }
  }
`;

export const Section5 = styled.div`
  display: block;
  flex: 1;
  /* margin-left: 10px; */

  @media (max-width: 430px) {
    display: none;
  }

  .title {
    font-weight: bold;
  }

  .link {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 8px;
  }
`;

export const CrContainer = styled.div`
  background-color: #eff2f4;
  width: 100%;
  padding: 15px 8%;
  display: flex;
  justify-content: flex-start;
  color: #606060;
  font-size: 14px;

  @media (max-width: 430px) {
    padding: 15px 5%;
    justify-content: center;
    font-size: 12px;
  }
`;

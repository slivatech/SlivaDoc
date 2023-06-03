import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  position: fixed;
  /* height: 70px; */
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  /* justify-content: center; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 999;
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 8%;
  background: #fff;

  @media (max-width: 768px) {
    padding: 15px 5%;
  }
`;

export const Logo = styled.div`
  display: flex;

  .toggle {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    cursor: pointer;
  }

  .Logo {
    width: 120px;
    /* height: 60px; */
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const BottomNav = styled.div`
  display: flex;
  background: #ffeded;
  padding: 10px 8%;
  height: 40px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DropdownWrap = styled.div``;

export const LinkWrap = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  /* display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0; */
  /* right: 0; */
  background-color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  /* transition: 1.5s all; */
  padding: 15px 8%;

  @media (max-width: 768px) {
    display: block;
    right: 0;
  }

  .close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .contentWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    /* height: 800%; */

    .content {
      font-size: 20px;
    }
  }

  .bttnWrap {
    margin-top: 50px;
  }
`;

export const Line = styled.hr`
  border: 1px solid #f5f5f5;
  margin: 10px 0px;
`;

// export const Wrapper = styled.div`

// `

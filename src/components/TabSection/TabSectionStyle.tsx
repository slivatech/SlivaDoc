import styled from "styled-components";
import { Container } from "../Container";

export const StyledClinicNav = styled(Container)`
  padding: 2rem 8%;
`;

export const ClinicWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
  border-bottom: 0.5px solid #1c1c1c6f;
`;

export const StyledLi = styled.li<{ isActive: boolean }>`
  text-transform: capitalize;
  font-size: 20px;
  border-bottom: ${(props) => (props.isActive ? "1px solid #1c1c1c" : null)};
  cursor: pointer;
  /* padding: 0 1rem 0; */
  &:not(:first-child) {
    /* padding-right: 2rem; */
    padding: 0 1rem 1rem 1rem;
  }
  &:first-child {
    padding: 0 1rem 1rem 0;
  }
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
`;

export const StyledInfoTab = styled.section`
  h2 {
    font-weight: 700;
    font-size: 18px;
    margin: 1rem 0;
  }
  p,
  ul {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: "#1c1c1c";
  }

  ul {
    padding-left: 1rem;
  }
`;

export const StyledCategory = styled.section`
  h2 {
    font-weight: 400;
    font-size: 20px;
  }
  flex: 0.4;
`;

export const StyledServiceTab = styled.section`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`;

export const CategoryBox = styled.div`
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;

  border: 1px solid rgba(153, 146, 146, 0.7);
  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  .selectWrapper {
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
  }

  select {
    background: none;
    outline: none;
    appearance: none;
    border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
    border: none;
    width: 100%;
  }
`;

export const StyledRadioCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1c1c1c;
  font-size: 12px;
`;

export const StyledAppointment = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  border-bottom:1px solid #ECE4E4;
  padding-bottom: 1.5rem;

  .appointmentInfo {
    display:flex;
    flex-direction: column;
    gap:.2rem;
    .title {
      font-size: 14px;
      font-weight: 700;
    }
    .cat {
      font-size: 12px;
      font-weight: 400;
    }

    .price {
      color: #f90909;
      font-size: 10px;
    }

    p {
      font-size:8px;
    }
  }
  img {
    width: 72px;
    border-radius: 5px;
    height: 85px;
    object-fit: cover;
  }
`;

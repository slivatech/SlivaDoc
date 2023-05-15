import styled from "styled-components";
import { Container } from "../Container";

export const StyledClinicNav = styled(Container)`
  margin-top: 2em;
`;

export const ClinicWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  list-style: none;
  border-bottom: 0.5px solid #1c1c1c6f;
`;

export const StyledLi = styled.li<{ isActive: boolean }>`
  text-transform: capitalize;
  font-size: clamp(14px, 2vw, 20px);
  border-bottom: ${(props) => (props.isActive ? "1px solid #1c1c1c" : null)};
  cursor: pointer;
  /* padding: 0 1rem 0; */
  &:not(:first-child) {
    /* padding-right: 2rem; */
    padding: 0 1rem 1rem 1rem;
    @media (max-width: 768px) {
      padding: 0 0.5rem 0.5rem 0.5rem;
    }
  }
  &:first-child {
    padding: 0 1rem 1rem 0;
    @media (max-width: 768px) {
      padding: 0 0.5rem 0.5rem 0;
    }
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
    font-size: 14px;
    line-height: 22px;
    font-style: italic;
    color: "#1c1c1c";
    max-width: auto;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  ul {
    padding-left: 1rem;
  }
`;

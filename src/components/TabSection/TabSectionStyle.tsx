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
    font-size: 13px;

    line-height: 22px;
    color: "#1c1c1c";
    max-width: 75%;
    @media (max-width: 768px) {
      max-width: 100%;
    }
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
  @media (max-width: 768px) {
    display: none;
  }
  display: block;
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
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    cursor: pointer;
    select,
    &::after {
      grid-area: select;
    }
    select {
      outline: none;
      border: none;
      appearance: none;
      position: relative;
      padding-bottom: 0.5rem;
    }
    .dropdown-arrow {
      position: absolute;
      right: 15px;
      top: 0px;
    }

    width: 100%;

    border-bottom: 1px solid gray;
    padding: 0.25em 0.5em;

    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;

    // Custom arrow
    /* &::after {
      content: "";
      position: absolute;
      top:10px;
      right:5px;
      background: url("/assets/arrow-dropdown.svg");
    } */
  }

  // Interim solution until :focus-within has better support
  /* select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
} */

  /* select[multiple] {
  padding-right: 0;

  height: 6rem;

  option {
    white-space: normal;

    outline-color: var(--select-focus);
  }


} */

  /* select {
    background: none;
    outline: none;
    appearance: none;
    border-bottom: 0.5px solid rgba(28, 28, 28, 0.6);
    border: none;
    width: 100%;
    &::after {
      content: "";
      justify-self: end;
      width: 0.8em;
      height: 0.5em;
      background-color: var(--select-arrow);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
    min-width: 15ch;
  max-width: 30ch;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;


  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  &::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  } */
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
  border-bottom: 1px solid #ece4e4;
  padding-bottom: 1.5rem;

  .appointmentInfo {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .title {
      font-size: 14px;
      font-weight: 700;
      @media (max-width: 375px) {
        font-size: 12px;
      }
    }
    .cat {
      font-size: clamp(12px, 375px, 10px);

      font-weight: 400;
      @media (max-width: 375px) {
        font-size: 10px;
      }
    }

    .price {
      color: #f90909;
      font-size: 10px;
      @media (max-width: 375px) {
        font-size: 8px;
      }
    }

    p {
      font-size: 8px;
    }
  }
  img {
    width: 72px;
    border-radius: 5px;
    height: 85px;
    object-fit: cover;
  }
`;

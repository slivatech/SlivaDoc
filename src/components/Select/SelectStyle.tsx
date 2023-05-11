import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  white-space: nowrap;
`;

type BorderType = "bottom" | "top";

interface LabelBtnProps {
  border?: string;
  radius?: string;
  borderType?: BorderType;
  padding?:string;
}

export const SelectLabelButton = styled.button<LabelBtnProps>(({ border, radius, borderType,padding }) => `
  padding:${padding ? padding:"0.5rem 1.25rem"};
  min-width: 7rem;
  width:100%;
  font-size: 12px;

  background-color: #fff;
  border-radius: ${radius ? radius : ""};
  color: rgba(28, 28, 28, 0.7);
  display:flex;
  align-items: center;
  justify-content: space-between;
  border:${borderType ? "none" : border};
  cursor: pointer;
  /* transition: 0.3s ease; */
  /* &:hover {
    background-color: #eee;
  } */
  ${borderType === "bottom" ? css`
    border-bottom:1px solid black;
    /* border:none; */
    
  `:null}

`
);

export const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  /* max-height: 40vmax;
  min-width: 10rem; */
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: hidden;
  ${({ isVisible }) =>
    isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 10px;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: #127fff;
    color: #fafafa;
    outline: none;
  }

  ${({ active }) =>
    active &&
    css`
      color: #127fff;
      font-weight: 500;
    `}
`;

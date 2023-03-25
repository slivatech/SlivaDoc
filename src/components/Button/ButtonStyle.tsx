import styled from "styled-components";

export const StyledButton = styled.button<{
  borderRadius: string;
  bgColor: string;
  color: string;
  size: "normal" | "large";
  active: boolean;
}>`
  background: ${(props) =>
    props.bgColor
      ? props.bgColor
      : props.active
      ? "linear-gradient(0deg, rgba(144,170,209,1) 0%, rgba(82,150,229,1) 100%);"
      : "white"};
  color: ${(props) =>
    props.color ? props.color : props.active ? "white" : "black"};
  /* color: ${(props) => props.color}; */
  padding: 8px 24px;
  border: none;
  border-radius: ${(props) => props.borderRadius || "5px"};
  cursor: pointer;
  white-space: nowrap;
  font-weight: ${(props) => props.theme.fontWeights.normal};
  box-shadow: ${(props) =>
    props.active ? null : " rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"};
  transition: all 0.1s linear;
  &:hover {
    background: ${(props) =>
      props.bgColor
        ? props.bgColor
        : "linear-gradient(0deg,rgba(144, 170, 209, 1) 0%,rgba(82, 150, 229, 1) 100%)"};

    color: white;
  }

  @media (max-width: 640px) {
    padding: 4px 12px;
  }
`;

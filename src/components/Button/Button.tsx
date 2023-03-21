import React, { FC } from "react";
import { StyledButton } from "./ButtonStyle";
type Size = "normal" | "large";

interface IButton {
  text: string;
  radius?: string;
  bgColor?: string;
  color?: string;
  icon?: React.ReactNode;
  size?: Size;
  active?:boolean;
}

const Button: FC<IButton> = ({ text, radius, bgColor, color, icon, size,active }) => {
  return (
    <StyledButton
      size={size as Size}
      borderRadius={radius as string}
      color={color as string}
      bgColor={bgColor as string}
      active={active as boolean}
    >
      {icon ? icon : null} {text}
    </StyledButton>
  );
};

export default Button;

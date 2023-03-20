import React, { FC } from "react";
import { StyledButton } from "./ButtonStyle";
type Size = "normal" | "large";

interface IButton {
  text: string;
  radius?: string;
  bgColor: string;
  color: string;
  icon?: React.ReactNode;
  size?: Size;
}

const Button: FC<IButton> = ({ text, radius, bgColor, color, icon, size }) => {
  return (
    <StyledButton
      size={size as Size}
      borderRadius={radius as string}
      color={color}
      bgColor={bgColor}
    >
      {icon ? icon : null} {text}
    </StyledButton>
  );
};

export default Button;

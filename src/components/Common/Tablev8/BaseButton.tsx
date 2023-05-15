import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "styled-components";

export interface BaseButtonProps extends React.ComponentPropsWithRef<"button"> {
  /**
    The border color of the Button. Accepts values 'transparent', 'light', 'dark' or a custom color.
    */
  borderColor?: "transparent" | "light" | "dark" | string;
  /**
    The background color of the Button. Accepts values 'transparent', 'light', 'dark' or a custom color.
    */
  color?: "transparent" | "light" | "dark" | string;
  /**
    Adds color gradient from top to bottom of the Button. Accepts [startColor, endColor].
    */
  colorGradient?: [string, string];
  /**
    Whether or not the Button has border radius.
    */
  cornerCurvature?: boolean;
  /**
    An onClick function for the Button.
    */
  onClick?: (e: any) => any;
  /**
    The text the Button displays.
    */
  text?: string;
  /**
    The color of the text. Accepts values 'light', 'dark' or a custom color.
    */
  textColor?: "light" | "dark" | string;
  /**
   * Type of the button. Either 'button', 'submit' or 'reset', default 'button'
   */
  type?: "button" | "submit" | "reset";
  /**
   * The style object used to override the button styling.
   */
  style?: object;
  /**
    An onMouseOver function for the Button. Used for change Hover color or other function.
    */
  onMouseOver?: (e: any) => any;
  /**
    An onMouseLeave function for the Button. Used for change Hover color or other function.
    */
  onMouseLeave?: (e: any) => any;
}

export const StyledBaseButton = styled(
  ({
    borderColor,
    color,
    colorGradient,
    cornerCurvature,
    disabled,
    textColor,
    refs,
    ...rest
  }) => <button {...rest} ref={refs} disabled={disabled} />
)`
  background-color: ${({ color, disabled }) => (disabled ? "#E6E6E6" : color)};
  border: ${({ borderColor, disabled }) =>
    `1px solid ${disabled ? "#E6E6E6" : borderColor}`};
  border-radius: ${({ cornerCurvature }) => (cornerCurvature ? `5px` : `0`)};
  color: ${({ textColor }) => textColor};
  cursor: ${({ disabled }) => (disabled ? `auto` : `pointer`)};
  font-size: 0.75rem;
  font-weight: 600;
  outline: none;
  white-space: nowrap;
  ${({ colorGradient, disabled }) =>
    colorGradient && !disabled
      ? css`
          background-color: transparent;
          background-image: linear-gradient(
            to bottom,
            ${colorGradient[0]},
            ${colorGradient[1]}
          );
        `
      : null};
`;

const BaseButton: React.FC<BaseButtonProps> = ({
  borderColor = "transparent",
  color = "dark",
  colorGradient,
  cornerCurvature = true,
  onClick = () => {},
  text = "",
  textColor = "light",
  type = "button",
  onMouseOver = () => {},
  onMouseLeave = () => {},
  ...rest
}) => {
  const themeContext = useContext(ThemeContext);

  const COLOR: { [key: string]: string } = {
    transparent: "transparent",
    light: "#FFFFFF",
    dark: "#354559",
  };

  const TEXT_COLOR: { [key: string]: string } = {
    light: "#FFFFFF",
    dark: "#354559",
  };

  const baseButtonProps = {
    borderColor: COLOR[borderColor] || borderColor,
    color: COLOR[color] || color,
    colorGradient,
    cornerCurvature,
    textColor: TEXT_COLOR[textColor] || textColor,
    type,
  };

  return (
    <StyledBaseButton
      {...rest}
      {...baseButtonProps}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </StyledBaseButton>
  );
};

export default BaseButton;

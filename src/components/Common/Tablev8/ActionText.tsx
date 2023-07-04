// Permutations: ResendOTP, Disclaimer, CustomiseView, PriceVolumeAlerts, AddToWatchlist, AddToBatchorder, ShortSell, SCL, PCF, Edit, WorldClock, Add Contract, Reset (Calculator), Summary (Research), etc.
import React from "react";
// import Text from './Text';

interface ActionTextProps extends React.ComponentPropsWithRef<"a"> {
  /**
    The color of the Text. Accepts values 'light', 'dark' or a custom color.
    */
  color?: "light" | "dark" | string;
  /**
    The size of the Text.
    */
  size?: number;
  /**
    The text to be displayed.
    */
  text: string;
  /**
    The weight of the Text. Accepts values 'light', 'regular', 'semibold', 'bold' or 'extrabold'.
    */
  weight?: "light" | "regular" | "semibold" | "bold" | "extrabold";
  /**
   * Is the link disabled?
   */
  disabled?: boolean;
}

const ActionText: React.FC<ActionTextProps> = React.forwardRef(
  (
    {
      color = "dark",
      size = 12,
      text = "",
      weight = "semibold",
      disabled = false,
      style = {},
      ...rest
    }: ActionTextProps,
    ref
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const textProps = {
      color: disabled ? "#E6E6E6" : color,
      size,
      text,
      weight,
    };

    return (
      <a
        {...rest}
        style={{
          borderBottom: `2px dotted ${disabled ? "#E6E6E6" : color}`,
          cursor: disabled ? `auto` : `pointer`,
          textDecoration: "none",
          ...style,
        }}
        ref={ref}
      >
        {text}
      </a>
    );
  }
);

export default ActionText;

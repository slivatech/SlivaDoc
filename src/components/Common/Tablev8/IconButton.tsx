// Permutations: Edit icon, Logout icon, AlertBell icon with badge IconButton, Close icon, Delete icon, Sorting arrows, etc.
import React from 'react';
import { BaseButtonProps, StyledBaseButton } from './BaseButton';
import Icon from './Icon';

export interface IconButtonProps extends BaseButtonProps {
  /**
   * The image source for the IconButton.
   */
  src: string;
  /**
   * An alternate text for the image.
   */
  alt: string;
  /**
   * Height of the Icon.
   */
  height?: string;
  /**
   * Width of the Icon.
   */
  width?: string;
  /**
   * An onClick function for the IconButton.
   */
  onClick?: (e: any) => any;
};

const IconButton: React.FC<IconButtonProps> = React.forwardRef(({
  src = '',
  alt = '',
  height = 'auto',
  width = 'auto',
  onClick = () => { },
  ...rest
}: IconButtonProps, ref) => {
  const iconProps = {
    src,
    alt,
    height,
    width,
  };

  return (
    <StyledBaseButton
      {...rest}
      cornerCurvature={false}
      color="transparent"
      borderColor="transparent"
      onClick={onClick}
      refs={ref}
    >
      <Icon {...iconProps} />
    </StyledBaseButton>
  );
});

export default IconButton;

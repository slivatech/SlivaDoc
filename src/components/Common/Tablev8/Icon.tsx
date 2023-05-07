// Permutations: SecureLock icon, MagnifyingGlass icon, ShowMore icon, ShowLess icon, Dropdown icon, AlertBell icon, LoginOCBC logo, LoadingOCBC logo, SubheaderOCBC logo, Refinitiv logo, etc.
import React from 'react';
import styled from 'styled-components';

export interface IconProps extends React.ComponentProps<'img'> {
  /**
   * The path to the image.
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
};

const StyledIconImg = styled(({
  src,
  alt,
  height,
  width,
  ...rest
}) => <img {...rest} src={src} alt={alt} />)`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  vertical-align: middle;
`;

const Icon: React.FC<IconProps> = ({
  src = '',
  alt = '',
  height = 'auto',
  width = 'auto',
  ...rest
}) => {
  const iconProps = {
    src,
    alt,
    height,
    width,
  };

  return (
    <StyledIconImg {...rest} {...iconProps} />
  );
};

export default Icon;

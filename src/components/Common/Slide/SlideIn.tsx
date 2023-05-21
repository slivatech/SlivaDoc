import styled, { keyframes } from 'styled-components';

interface SlideinProps {
  /**
   * Boolean, whether the panel is open or not.
   */
  isOpen?: boolean;
  /**
   * overflow-y, whether scroll or auto
   */
  overflowY?: 'scroll' | 'auto';
  /**
   * Width. Default is auto
   */
  width?: string;
  /**
   * Height. Default is auto
   */
  height?: string;
  /**
   * Border radius. Default is 0
   */
  borderRadius?: string;
  /**
   * Sliding speed in ms. Default to 200ms
   */
  slideSpeed?: number;
  /**
   * Slide direction. 'right' | 'down'. Default to 'right'
   */
  slideDirection?: 'right' | 'down';
  /**
   * Offset from top in px. Default is top: 0 and right: 0
   */
  top?: number;
  /**
   * Offset from bottom in px. Default is top: 0 and right: 0
   */
  bottom?: number;
  /**
   * Offset from left in px. Default is top: 0 and right: 0
   */
  left?: number;
  /**
   * Offset from right in px. Default is top: 0 and right: 0
   */
  right?: number;
}

const slideLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const slideDown = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  100% {
    transform-origin: top;
    transform: scaleY(1);
  }
`;
const slideUp = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(1);
  }
  100% {
    transform-origin: top;
    transform: scaleY(0);
  }
`;

const handleDirection = (isOpen: boolean, direction: 'right' | 'down') => {
  switch (direction) {
    case 'right':
      return (isOpen) ? slideRight : slideLeft;
    case 'down':
      return (isOpen) ? slideDown : slideUp;
  }
}

const SlideIn = styled.div<SlideinProps>`
  z-index: 5000;
  ${({ overflowY = 'scroll' }) => (overflowY !== undefined) ? `overflow-y: ${overflowY};` : `overflow-y: scroll;`}
  background-color: #fff;
  position: absolute;
  ${({ top = 0 }) => (top !== undefined) ? `top: ${top}px;` : `top: 0;`}
  ${({ bottom = undefined }) => (bottom !== undefined) ? `bottom: ${bottom}px;` : ``}
  ${({ right = undefined }) => (right !== undefined) ? `right: ${right}px;` : ``}
  ${({ left = undefined }) => (left !== undefined) ? `left: ${left}px;` : ``}
  border-radius: ${({ borderRadius = 0 }) => borderRadius};
  width: ${({ width = 'auto' }) => width};
  height: ${({ height = 'auto' }) => height};
  animation: ${({ isOpen = false, slideDirection = 'right' }) => handleDirection(isOpen, slideDirection)} ${({ slideSpeed = 200 }) => slideSpeed}ms ease-in;
`;

export default SlideIn;
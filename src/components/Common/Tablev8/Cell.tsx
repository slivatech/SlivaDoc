import React from 'react';
import styled from 'styled-components';
export const EMPTY_VALUE = '--';

export const ALIGN: { [key: string]: { [key: string]: string } } = {
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap'
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },
}
interface Styled2RowProps {
  align?: string;
  width?: string;
}
export const Styled2Row = styled.div<Styled2RowProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align = 'right' }) => `${ALIGN[align].alignItems}`};
  ${({ color }) => (color) ? `color: ${color};` : ``};
`;
interface StyledCellProps {
  bold?: boolean;
  color?: string;
  size?: number;
  align?: string;
}
export const StyledCell = styled.div<StyledCellProps>`
  ${({ bold }) => (bold) ? `font-weight: 700;` : ``}
  ${({ color }) => (color) ? `color: ${color};` : ``}
  ${({ size }) => (size) ? `font-size: ${size}px;` : ``}
  text-align: ${({ align = 'left' }) => align};
  width: inherit;
`;
interface CellProps {
  /**
   * Value of the object passed into a cell. Should contain key row1, row2 depending on the type. If falsy value will display empty value '--'
   */
  value: {
    row1?: string;
    row2?: string;
  };
  /**
   * Type of cell. '2row' | '1row' <br/>
   * This is just a simple Cell component
   */
  type: '2row' | '1row';
  /**
   * Alignment of the Cell. 'left' | 'right' | 'center' <br/>
   * Default to right
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Show text in bold?
   */
  bold?: boolean;
  /**
   * Text color
   */
  color?: string;

  style?: any
}
const Cell: React.FC<CellProps> = React.memo(({
  type,
  value,
  align = "right",
  bold = false,
  color,
  style 
}) => {
  const {
    row1 = EMPTY_VALUE, row2 = EMPTY_VALUE,
  } = value;

  let render;
  switch (type) {
    case '2row':
      render = (
        <>
          <StyledCell align={align} bold={bold} color={color} style={style}>{row1 || EMPTY_VALUE}</StyledCell>
          <StyledCell align={align} bold={bold} color={color} style={style}>{row2 || EMPTY_VALUE}</StyledCell>
        </>
      );
      break;
    case '1row':
      render = (
        <StyledCell align={align} bold={bold} color={color} style={style}>{row1 || EMPTY_VALUE}</StyledCell>
      );
      break;
  }

  return (
    <Styled2Row align={align}>
      {render}
    </Styled2Row>
  )
});

export default Cell;
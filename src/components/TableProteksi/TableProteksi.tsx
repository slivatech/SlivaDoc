import React from 'react';
import styled from 'styled-components';

interface TableProps {
  col1Rows: number;
  col2Rows: number;
  data: { col1: string; col2: string }[];
  head: string;
}

const TableContainer = styled.div`
  display: flex;
  width: 795px;
  flex-direction: column;
  table {
    border-collapse: collapse;
    .head {
      background: conic-gradient(from 180deg at 50% 74.49%, rgba(217, 217, 217, 0) 0deg, #B8C3E9 191.25deg, rgba(217, 217, 217, 0) 360deg);
      border: 1px solid #8CDDE2;
      border-radius: 10px 10px 0px 0px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const TableRow = styled.tr``;

const TableCol = styled.td`
  padding: 8px;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #8CDDE2;
  border-radius: 10px;
`;

const TableProteksi: React.FC<TableProps> = ({ col1Rows, col2Rows, data, head }) => {
  const totalRows = Math.max(col1Rows, col2Rows);

  const getCellValue = (rowIndex: number, colIndex: number) => {
    if (colIndex === 0) {
      return rowIndex < col1Rows ? data[rowIndex]?.col1 : '';
    }
    if (colIndex === 1) {
      return rowIndex === 0 ? data[0]?.col2 : '';
    }
    return '';
  };

  return (
    <TableContainer>
      <table>
        <tbody>
          <TableRow>
            <TableCol className="head" colSpan={2}>
              {head}
            </TableCol>
          </TableRow>
          {[...Array(totalRows)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(2)].map((_, colIndex) => (
                <TableCol key={colIndex}>{getCellValue(rowIndex, colIndex)}</TableCol>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default TableProteksi;

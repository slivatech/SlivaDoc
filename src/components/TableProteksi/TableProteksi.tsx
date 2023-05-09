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
  width: 100%;
  flex-direction: row;
`;

const TableCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

`;


const TableHead = styled.div`
  background: conic-gradient(from 180deg at 50% 74.49%, rgba(217, 217, 217, 0) 0deg, #B8C3E9 191.25deg, rgba(217, 217, 217, 0) 360deg);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  padding: 10px;
  border: 1px solid #8CDDE2;
  width:100%;
`;

const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  border: 1px solid #8CDDE2;
  width:391px;
  align-items: center;
  justify-content: center;
`;

const TableCell1 = styled.td`
 display: flex;
  width: 100%;
  padding: 10px;
  border-right: 1px solid #8CDDE2;
  align-items: center;
  justify-content: center;
`;

const TableCell2 = styled.td`
  width: 100%;
  padding: 10px;
`;

const TableProteksi: React.FC<TableProps> = ({ col1Rows, col2Rows, data, head }) => {
  return (
    <TableContainer>
      <TableCol>
        <TableHead>{head}</TableHead>
        <tbody>
          {[...Array(col1Rows)].map((_, index) => (
            <TableRow key={index}>
              <TableCell1>{data[index]?.col1}</TableCell1>
              {index === 0 && <TableCell2 rowSpan={col2Rows}>{data[0]?.col2}</TableCell2>}
            </TableRow>
          ))}
        </tbody>
      </TableCol>

    </TableContainer>
  );
};

export default TableProteksi;

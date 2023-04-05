import styled from "styled-components";

export const TableStyle = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: 0 auto;

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const TableHead = styled.thead`
  color: #06152b;
  font-size: 12px;
  padding: 0 1rem;
  th {
    text-align: start;
    padding: 0 1rem;
    cursor:pointer;
  }
  img {
    margin-left: 0.5rem;
  }
  .desc {
    transform: rotateX(3.142rad);
  }
`;

export const TableData = styled.td`
  font-size: 14px;
  background: white;
  padding: 1rem;
  
  

  img {
    width:30px;
    height:30px;
    border-radius:50px;
    object-fit:cover;
  }

  .genderRow {
    border-radius: 50px;
    padding: 0.5rem;
    text-align: center;
    max-width:100px;
  }
  .male {
    background: rgba(3, 168, 157, 0.185);
    color: #03a89e;
  }

  .female {
    color:#FF69B4;
    background:rgba(255, 105, 180, 0.185);
  }
`;

export const TableBody = styled.tbody``;

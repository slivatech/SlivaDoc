import styled from "styled-components";


export const TableStyle = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: 0 auto;
  
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 2rem;
  }
  td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    text-align: end;
    padding-right: 2rem;
    width: 100px;
  }
  td:nth-child(3) {
    width: 50px;
  }
  td:nth-child(5) {
    width: 300px;
  }
  td:nth-child(6) {
    width: 190px;
  }
  td:nth-child(7) {
    width: 190px;
  }

  button {
    border: none;
    cursor: pointer;
  }

  
`;

export const TableHead = styled.thead`
  color: #06152b;
  font-size: 12px;
    th {
      text-align: start;
      cursor:pointer;
    }
    th:first-child {
        padding-left: 2rem;
    }
    th:last-child {
        text-align: end;
        padding-right: 2rem;
    }
    img {
        margin-left: 0.5rem;
    }
    .desc {
        transform: rotateX(3.142rad);
    }
    .btn-edit {
        background-color: transparent;
        img {
            background-color: transparent;
        }
    }
    
`;

export const TableData = styled.td`
  font-size: 14px;
  background-color: #fff;
  height: 70px;
    .name {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
    }
    .list-icon {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    .btn-edit {
        background-color: white;
        img {
            background-color: white;
        }
    }

    .btn-status {
        padding: 15px 44px;
        min-width: 150px;
        border-radius: 22.5px;
    }
    .complete {
        background-color: rgba(3, 168, 158, 0.1);
        color: #03A89E;
    }
    .pending {
        background-color: rgba(58, 54, 219, 0.1);
        color: #3A36DB;
    }
    .cancel {
        background-color: rgba(255, 105, 180, 0.1);
        color: #FF69B4;
    }
`
export const GlobalSearch = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    background-color: #FFFFFF;
    font-size: 0.8rem;
    border: 1px solid #dadada;
    border-radius: 10px;
    padding: 9px;
   
    input {
        border: none;
        outline: none;
        margin-left: 13px;
        width: 100%;
        &:focus {
            border-color: #127fff;
            }
            ::placeholder,
            ::-webkit-input-placeholder {
            color: #dadada;
            }
            :-ms-input-placeholder {
            color: #dadada;
            }
        @media (max-width: 720px) {
            background-color: #FAFAFA;
        }
    }
`

export const NameColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:.5rem;
  padding: 0 .5rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const IconColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`
export const StatusColumn = styled.div<{ status:"Complete" | "Pending" | "Cancel" }>(({ status })=>`
    padding: 15px 44px;
    min-width: 150px;
    border-radius: 22.5px;
    font-size:14px;
    background:${status === "Complete" ? "rgba(3, 168, 158, 0.1)" : status === "Pending" ? "rgba(58, 54, 219, 0.1)" : " rgba(255, 105, 180, 0.1)" };
    color: ${status === "Complete" ? "#03A89E" : status === "Pending" ? " #3A36DB" : "#FF69B4" };
    display:flex;
    justify-content:center;
    align-items:center;
`)

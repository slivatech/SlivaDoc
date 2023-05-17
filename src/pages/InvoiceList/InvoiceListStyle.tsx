import styled from "styled-components";

export const GlobalSearch = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  background-color: #ffffff;
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
      background-color: #fafafa;
    }
  }
`;

export const NameColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;

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
`;
export const StatusColumn = styled.div<{
  status: "Complete" | "Pending" | "Cancel";
}>(
  ({ status }) => `
    padding: 15px 44px;
    min-width: 150px;
    border-radius: 22.5px;
    font-size:14px;
    background:${
      status === "Complete"
        ? "rgba(3, 168, 158, 0.1)"
        : status === "Pending"
        ? "rgba(58, 54, 219, 0.1)"
        : " rgba(255, 105, 180, 0.1)"
    };
    color: ${
      status === "Complete"
        ? "#03A89E"
        : status === "Pending"
        ? " #3A36DB"
        : "#FF69B4"
    };
    display:flex;
    justify-content:center;
    align-items:center;
`
);

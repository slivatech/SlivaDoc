import styled from "styled-components";

const SearchInput = styled.input`
  padding: 8px 16px;
  width: 75%;
  outline: none;

  background-color: transparent;
  font-size: 0.8rem;
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
  border: 1px solid #dadada;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export default SearchInput;

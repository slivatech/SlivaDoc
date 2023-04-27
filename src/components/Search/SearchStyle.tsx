import styled from "styled-components";

const SearchInput = styled.input`
  padding: 8px 16px;
  /* width: 75%; */
  width: 300px;
  outline: none;

  background-color: transparent;
  font-size: 0.8rem;
  &:focus {
    border-color: #127fff;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #1C1C1CB2;
  }
  :-ms-input-placeholder {
    color: #dadada;
  }
  border: 1px solid #999292B2;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export default SearchInput;

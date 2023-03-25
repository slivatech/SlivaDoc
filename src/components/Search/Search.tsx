import React, { FC } from "react";
import styled from "styled-components";
import SearchInput from "./SearchStyle";

const StyledForm = styled.form`
  max-width: 750px;
  white-space: nowrap;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchButton = styled.button`
  color: white;
  background: #127fff;
  padding: 8px 24px;
  border-radius: 0px 4px 4px 0px;
  border: none;
`;

const Search: FC = () => {
  return (
    <StyledForm>
      <SearchInput placeholder="Cari di silvadoc" />

      <SearchButton>Search</SearchButton>
    </StyledForm>
  );
};

export default Search;

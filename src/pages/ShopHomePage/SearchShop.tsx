import React from 'react';
import styled from 'styled-components';

interface SearchShopProps {
  placeholder: string;
}

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  @media (max-width: 720px) {
    position: absolute;
    z-index: 2;
    top: 20%;
    padding: 0 5%;
  }
  

  button {
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
    color: white;
    border: none;
    cursor: pointer;
  }

  form {
    display: flex;
    width: 100%;
    border: 1px solid #0d6efd;
    border-radius: 5px;
    @media (max-width: 720px) {
      width: 100%;
    }

    button {
      padding: 10px 23px;
      @media (max-width: 720px) {
        padding: 9px 20px;
      }
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
  }
`;

const SearchShop: React.FC<SearchShopProps> = ({ placeholder }) => {
  return (
    <SearchContainer>
      <form>
        <input
          type="text"
          placeholder={placeholder}
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </SearchContainer>
  );
};

export default SearchShop;
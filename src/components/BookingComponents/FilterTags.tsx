import React from "react";
import styled from "styled-components";
// import BaseButton from "../Common/Buttons/BaseButton";

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

const FilterTagStyle = styled.div`
  border-radius: 3px;
  border: 0.5px solid rgba(153, 146, 146, 0.7);
  white-space: nowrap;
  font-size: 10px;
  color: rgba(28, 28, 28, 0.7);
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

const FilterTags = () => {
  const values = ["Terdekat", "Lokasi", "Pengalaman Praktik", "Harga"];

  return (
    <FilterContainer>
      <FilterTagStyle>
        <img src="/assets/filtering.svg" alt="filtering"/>
      </FilterTagStyle>
      {values.map((value, i) => (
        <FilterTag value={value} key={i} />
      ))}
    </FilterContainer>
  );
};

const FilterTag = ({ value }: { value: string }) => {
  return <FilterTagStyle>{value}</FilterTagStyle>;
};

export default FilterTags;

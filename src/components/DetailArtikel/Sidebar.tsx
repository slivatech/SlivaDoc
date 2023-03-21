import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-end;
`;

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CategoryItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <CategoryList>
        <CategoryItem>Category 1</CategoryItem>
        <CategoryItem>Category 2</CategoryItem>
        <CategoryItem>Category 3</CategoryItem>
      </CategoryList>
    </SidebarContainer>
  );
};

export default Sidebar;

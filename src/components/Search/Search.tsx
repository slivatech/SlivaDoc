import React, { FC } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import SearchInput from './SearchStyle'

const StyledForm = styled.form`
  width:750px;
  white-space: nowrap;
`
const Search:FC = () => {
  return (
    <StyledForm>
        <SearchInput placeholder='Cari di silvadoc' />

        <Button color="#fff" bgColor="#127FFF" text="Search" radius="0px 4px 4px 0px" />
    </StyledForm>
  )
}

export default Search
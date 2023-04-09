import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table';
import { GlobalSearch } from './InvoiceListStyle';
import searchIc from '../../assets/icon/Search.svg'


export const GlobalFilter = ({filter, setFilter} : (any)) => {
  return (
      <GlobalSearch>
        <input value={filter || ''} onChange={e => setFilter(e.target.value)} placeholder='Search'/>
        <img src={searchIc} />
      </GlobalSearch>

  )
}


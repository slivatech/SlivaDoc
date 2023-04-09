import React from 'react'
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


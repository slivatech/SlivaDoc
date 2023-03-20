import React, { FC } from 'react'
import Button from '../Button/Button'
import { GroupButtons } from '../GroupButtons/GroupButtons'

const NavButtons:FC = () => {
  return (
    <div style={{ display:'flex',justifyContent:"center" }}>
    <GroupButtons>
        <Button  color="#27292a" bgColor='#E0E5ED' text="Chat dengan dokter" />
        <Button color="#27292a" bgColor='#E0E5ED' text="Cari dokter" />
        <Button color="#27292a" bgColor='#E0E5ED' text="SilvaProteksi" />
        <Button color="#27292a" bgColor='#E0E5ED' text="SlivaShop" />
 
    </GroupButtons>
    </div>

  )
}

export default NavButtons
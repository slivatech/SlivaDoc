import React from 'react'
import { AvatarStyled } from './AvatarStyled'

const Avatar = ({ imgSrc,size }:{size:number,imgSrc:string}) => {
  return (
    <AvatarStyled src={imgSrc} size={size} />
  )
}

export default Avatar
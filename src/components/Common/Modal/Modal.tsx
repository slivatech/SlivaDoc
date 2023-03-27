import React from 'react'
import styled from 'styled-components'

interface ModalProps {
    open: boolean;
    setIsOpen: any;
    isBackgroundClick: boolean;
    // backgroundColor
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({open, setIsOpen, isBackgroundClick, children}) => {
  if(!open) return null
  return (
    <Overlay 
      onClick={isBackgroundClick? () => setIsOpen(!open) : () => {}}
    >
      <ModalContainer 
        onClick={(e:any) => e.stopPropagation()} 
      >
        {children}
      </ModalContainer>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 99;
`

const ModalContainer = styled.div`
  max-width: 310px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 40%;
  left: 10%;
  padding: 10px;
  z-index: 100;
  /* transform: translate(-50%, -50%); */
`

export default Modal
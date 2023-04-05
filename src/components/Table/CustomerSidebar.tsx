import React from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar/Avatar';

export const CustomerSidebarStyle = styled.aside<{ isOpen:boolean}>(({ isOpen })=>`
      min-height:100vh;
    background:white;
    width:25%;
  transform:${isOpen ? "translateX(0)" :"translateX(100%"};
  transition: transform 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);

    /* transition:all .2s linear; */

`);

export const ProfileSection = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:.5rem;
  border-bottom:1px solid #06152b18;
  padding:2rem 1rem;
  .name {
    font-size:22px;
    color:#06152B;
  }
  p {
    color:#06152B;
    font-size:14px;
  }

`

export const ContactSection = styled.div`
    display:flex;
  flex-direction:column;
  gap:.5rem;
  padding:2rem 1rem;

  h2 {
    font-size:18px;
    color:#06152B;
    font-weight:500;
  }

`

const CustomerSidebar = ({ isOpen}:{isOpen:boolean}) => {
  return (
    <CustomerSidebarStyle isOpen={isOpen}>
        <ProfileSection>
          <Avatar size={50} imgSrc='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' />
          <h1 className='name'>John Doe</h1>
          <p>Entrepreneur</p>
        </ProfileSection>
        <ContactSection>
          <h2>Contact Info</h2>

        </ContactSection>
    </CustomerSidebarStyle>
  )
}

export default CustomerSidebar
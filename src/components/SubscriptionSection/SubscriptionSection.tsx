import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { EmailInput, SubscriptionStyled } from './SubsriptionSectionStyle'

const StyledForm = styled.form`
    display:flex;
    gap:.5rem;
    @media (max-width:400px) {
      flex-direction: column;
      align-items:center;
      justify-content: center;
      
    }
`

const SubscriptionSection = () => {
  return (
    <SubscriptionStyled>
        <h3>Subscribe on our newsletter</h3>
        <p style={{ color:"gray",fontSize:"12px" }}>Get new daily news on upcoming offers from upcoming suppliers all over the world</p>
        <StyledForm>
            <div style={{ display:"flex",border:"1px solid #dddddd",padding:"0 4px",borderRadius:"5px"}}>
                <img src="/email-svg.svg" alt='email'/>
                <EmailInput placeholder='Email' />
                
            </div>
            <Button text="Subscribe" bgColor='#0a74ff' color="white" />
        </StyledForm>
    </SubscriptionStyled>
  )
}

export default SubscriptionSection
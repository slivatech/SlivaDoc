import React from "react";
import { ButtonWrap, Container, Form, LeftWrap, LogoWrap, RightWrap, TextWrap } from "./style";
import BaseButton from "../../components/Common/Buttons/BaseButton";

import Logo from '../../assets/Icon.svg'
import Google from '../../assets/icon/google.png'
import facebook from '../../assets/fb.png'

const Auth = () => {
    return(
        <Container>
            <LeftWrap>
                <LogoWrap>
                    <img src={Logo} alt="Logo" />
                    <div className="title">Register</div>
                </LogoWrap>
                <ButtonWrap>
                    <BaseButton 
                        text="Google"
                        iconStart={
                            <div style={{marginRight:'8px'}}>
                                <img src={Google} alt="google" />
                            </div>
                        }
                        color='#F1F4FA'
                        radius="10px"
                    />
                </ButtonWrap>
                <Form></Form>
                <TextWrap></TextWrap>
            </LeftWrap>
            <RightWrap>p</RightWrap>
        </Container>
    )
}

export default Auth
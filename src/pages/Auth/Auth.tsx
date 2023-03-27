import React, { useState, useEffect } from "react";
import { ButtonWrap, Container, Form, LeftWrap, Line, LogoWrap, OptionWrap, RightWrap, TextWrap } from "./style";
import BaseButton from "../../components/Common/Buttons/BaseButton";

import Logo from '../../assets/Icon.svg'
import Google from '../../assets/icon/google.png'
import facebook from '../../assets/icon/Fb.png'
import illustration from '../../assets/image/login.png'

import { login, register } from "./fakeData";

const Auth = () => {
    const [page, setPage] = useState('Login')
    const [input, setInput] = useState(register)

    useEffect(() => {
        if(page === 'Register') setInput(register)
        if(page === 'Login') setInput(login)
    }, [page])

    return(
        <Container>
            <LeftWrap>
                <LogoWrap>
                    <img src={Logo} alt="Logo" />
                    <div className="title">{page}</div>
                </LogoWrap>
                <ButtonWrap>
                    <div>
                        <BaseButton 
                            text="Google"
                            iconStart={
                                <img src={Google} alt="google" />
                            }
                            color='#F1F4FA'
                            radius="10px"
                            width='100%'
                            height='35px'
                        />
                    </div>
                    <div>
                        <BaseButton 
                            text="Facebook"
                            iconStart={
                                <img src={facebook} alt="facebook" width={10} height={15}/>
                            }
                            color='#F1F4FA'
                            radius="10px"
                            width='100%'
                            height='35px'
                        />
                    </div>
                </ButtonWrap>
                <OptionWrap>
                    <div>
                        <Line />
                    </div>
                    <div className="middle">Or</div>
                    <div>
                        <Line />
                    </div>
                </OptionWrap>
                <Form>
                    {input?.map((data:any) => (
                        <div className="inpWrap" key={data.id}>
                            <label htmlFor={data.input}>{data.name}</label>
                            <input type={data.type} id={data.input} />
                        </div>
                    ))}

                    {page === 'Register' ? (
                        <div className="agree">
                            <input type='checkbox' id="check" />
                            <label htmlFor="check">
                                By creating an account you agree to the 
                                <span> terms of use </span>
                                and our <span> privacy policy </span>
                            </label>
                        </div>
                    ) : (
                        <div className="remember">
                            <div>
                                <input type='checkbox' id="check" />
                                <label htmlFor="check">
                                    Remember Me
                                </label>
                            </div>
                            <div className="reset">
                                Reset Password?
                            </div>
                        </div>
                    )}

                    <div className="submit">
                        <BaseButton 
                            text="Create account"
                            textColor="#fff"
                            color="#3a36db"
                            fontSize="14px"
                            radius="8px"
                            height='40px'
                        />
                    </div>
                </Form>
                <TextWrap>
                    <div>
                        {page === 'Register' ? (
                            <>
                                Already have an account?
                                <span onClick={() => setPage('Login')}> Log in </span>
                            </>
                        ) : (
                            <>
                                Don't have account yet?
                                <span onClick={() => setPage('Register')}> New Account </span>
                            </>
                        )}
                    </div>
                </TextWrap>
            </LeftWrap>
            <RightWrap>
                <img src={illustration} alt="" />
            </RightWrap>
        </Container>
    )
}

export default Auth
import styled from "styled-components";

export const Container = styled.div`
    /* padding: 0px 8%; */
    display: flex;
    /* background-color: #f1f4fa; */

    @media (max-width: 430px) {
        padding: 15px 5%;
    }
`

export const LeftWrap = styled.div`
    width: 40%;
    height: 100%;
    background-color: #fff;
    padding: 30px 10px;
`

export const LogoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: 20px;

    .title{
        margin-top: 6px;
    }

    img{
        width: 60px;
        height: 60px;
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    gap: 10px;
    background-color: red;
`

export const Form = styled.div``

export const TextWrap = styled.div``


export const RightWrap = styled.div`
    width: 60%;
    background-color: #f1f4fa;
`




import styled from "styled-components";

export const Container = styled.div`
    /* padding: 0px 8%; */
    display: flex;
    /* background-color: #f1f4fa; */

    @media (max-width: 430px) {
        /* padding: 15px 5%; */
    }
`

export const LeftWrap = styled.div`
    width: 30%;
    height: 100%;
    background-color: #fff;
    padding: 20px 30px;

    @media (max-width: 430px) {
        width: 100%;
        padding: 20px;
    }
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
        width: 65px;
        height: 65px;
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 30px;
    /* background-color: red; */
    div{
        width: 100%;
    }
`

export const Form = styled.div`
    width: 100%;
    margin-top: 12px;
    
    .inpWrap{
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label{
            font-size: 14px;
        }

        input{
            outline: none;
            border: none;
            background-color: #F1F4FA;
            height: 32px;
            border-radius: 5px;
            padding: 3px 10px;
        }
    }

    .agree{
        /* display: flex;
        gap: 6px; */

        label{
            font-size: 12px;
            margin-left: 6px;

            span{
                color: #3a36db;
                cursor: pointer;
            }
        }
    }

    .remember{
        display: flex;
        justify-content: space-between;

        .reset{
            color: #3a36db;
        }
        
        div{
            cursor: pointer;
            font-size: 12px;


            label{
                margin-left: 6px;
                font-size: 12px;
            }
        }
    }

    .submit{
        margin-top: 16px;
    }
`

export const TextWrap = styled.div`
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    font-size: 14px;

    div{
        span{
            cursor: pointer;
            color: #3a36db;
        }
    }
`

export const OptionWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    /* gap: 7px; */

    .middle{
        width: 35%;
    }

    div{
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const Line = styled.div`
    border: 1px solid #F1F4FA;
`

export const RightWrap = styled.div`
    width: 70%;
    background-color: #f1f4fa;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 430px) {
        display: none;
    }

    img{
        scale: 0.7;
    }
`




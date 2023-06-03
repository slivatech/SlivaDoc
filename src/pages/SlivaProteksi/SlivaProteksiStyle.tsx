import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 49px;
`;

export const CardPaket = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
`;

export const PaketContainer=styled.div`
    display:flex;
    justify-content: center;
margin-top:3.75rem;

`;

export const Section = styled.div`
  margin-top: 5.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #1c1c1c;
  }
  button {
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 17px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #c8d5e4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 225px;
    height: 40px;
    img {
      width: 15px;
      height: 15px;
    }
    p {
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
      text-align: center;
      padding-left: 3px;
    }
  }
`;

export const SectionRegister=styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
    margin:0;


    div{
        margin-top: 59px;
        display:flex;
        flex-direction: column;
        align-items: center;
        height:15.525rem;
       
        h3{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 60px;
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            color: rgba(28, 28, 28, 0.7);
            background: linear-gradient(180deg, #C9F3F5 100%, rgba(236, 228, 228, 0) 100%);
            border-radius: 50%;
        }
        
        div{
            height: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;

        h1{
            color: #1C1C1C;
            text-align: center;
   
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 22px;
        }
        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            text-align: center;
            color: #1C1C1C;
            margin-top:8px;
            width:247px;
        }
        button{
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            padding:5px;
            text-align: center;
           display:flex;
           margin-top: 2.375rem;
           justify-self: flex-end;
            color: #505050;
            border: 1px solid #C8D5E4;
            box-shadow: 3px 1px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
        }
       

    }
    @media only screen and (max-width: 768px) {
            width: 100%;
            display:flex;
            flex-wrap:wrap;
            justify-content: center;
            gap:1;
            height: 10rem;
            
                
                }
    }

`;

export const FAQContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.75rem;
`;

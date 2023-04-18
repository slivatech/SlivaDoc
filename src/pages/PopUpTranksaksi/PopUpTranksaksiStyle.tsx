import styled from 'styled-components';

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
@media (max-width: 767px) {
        width:auto;
        margin: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }
`;


export const Card = styled.div`
    background: #FCF6F6;
    border-radius: 10.5635px;
    min-width: 292.61px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 13px 17px 15px 25px;
    
    .text {
        display: flex;
        align-items: center;
        column-gap: 15px;
        color: #06152B;
        margin-bottom: 12px;
        
        h1 {
            font-weight: 700;
            font-size: 24.0637px;
            opacity: 0.7;
        }
        
        span {
            font-weight: 400;
            font-size: 15.0213px;
            opacity: 0.7;
        }
    }
    
    img {
        width: 63.38px;
    }

    button {
        background: #127FFF;
        border-radius: 5px;
        color: #FFF;
        border: none;
        font-weight: 400;
        font-size: 10px;
        cursor: pointer;
    }

    .btn-card {
        padding: 8px 16px;
        line-height: 12px;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 3px;

        img {
            width: 12px;
            margin-left: 3px;
        }
    }

`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  color:#06152B;
  font-weight: 700;
font-size: 22.78px;
line-height: 30px;
margin-bottom: 50px;;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  
  label{
    color: #000000;
    display: flex;

    border-radius: 10px;
    background: #ff69b465;
    width: 132px;
    height: 40px;
    justify-content: center;
    font-size: 14.22px;
    align-items: center;
    margin-bottom:18px ;
    
  }
  input{
    background: #99b2c675;
    border-radius: 10px;
    width: 406px;
    height: 42px;
    border: none;
    padding:15px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-top: 1px solid #ddd;
`;

export const ModalButton = styled.button`
  background-color:#3A36DB;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Modal = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  width: 466px;
height: 317px;
  margin: 0 auto;
  padding: 24px;
  position: relative;
`;

export const ModalCloseButton = styled.button`
  border: 1px ;
border-radius: 10px;
color: #3A36DB;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(180deg, #DCE3EB 0%, #E3E8EF 100%);
  }
`;

export const ModalFooter = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 24px;
gap: 16px;
`;
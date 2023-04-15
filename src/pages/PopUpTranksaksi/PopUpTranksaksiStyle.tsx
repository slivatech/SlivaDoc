import styled from 'styled-components';

export const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
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

 export const PopUpCard  =styled.div`
    background: #FCF6F6;
    border-radius: 10.5635px;

    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    
 `;
import styled from "styled-components";

export const StyledButton = styled.button<{ borderRadius:string,bgColor:string,color:string,size:"normal"|"large" }>`
    background:${props => props.bgColor};
    color:${props => props.color};
    padding:8px 24px;
    border:none;
    border-radius: ${props=>props.borderRadius || "4px"};
   cursor: pointer;
`
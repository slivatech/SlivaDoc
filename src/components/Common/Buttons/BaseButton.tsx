import React from "react";
import styled from "styled-components";

type ContainerProps = {
    color?: string;
    outline?: boolean;
    radius?: string;
    height?: string;
    width?: string;
    shadow?:string;
    gap?:string;
    border?:string;
}

const Container : any = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border:${({ border }) => border ? border:null};
    gap:${({ gap })=>gap ? gap : '1rem'};
    cursor: pointer;
    /* border: ${({ color }) => color?  `1px solid ${color}` : ''}; */
    background: ${({ outline, color }) => !outline? color? color : '' : 'transparent'};
    border-radius: ${({ radius }) => radius? radius : '30px'};
    height: ${({ height }) => height? height : 'auto'};
    width: ${({ width }) => width? width : 'auto'};
    box-shadow: ${({ shadow }) => shadow? shadow : null};
    img{
        /* width: 15px;
        height: 15px; */
        margin-left: 5px;
        /* object-fit: contain; */
    }
`

interface BaseButtonProps {
    outline?: string;
    color?: string;
    radius?: string;
    textColor?: string;
    fontSize?: string;
    text: string;
    iconStart?: any;
    iconEnd?: any
    [x:string]: any;
}

const BaseButton: React.FC<BaseButtonProps> = ({
    outline,
    textColor,
    color,
    radius,
    fontSize,
    text,
    iconStart,
    iconEnd,
    border,
    ...rest
}) => {
    return (
        <Container outline={outline} color={color} radius={radius} {...rest }>
            {iconStart? ( iconStart ) : ''}
            <p style={{color:textColor? textColor : '', fontSize:fontSize}}>{text}</p>
            {iconEnd? ( iconEnd ) : ''}
        </Container>
    )
}

export default BaseButton
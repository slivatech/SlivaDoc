import React from "react";
import styled from "styled-components";

type ContainerProps = {
    color?: string;
    outline?: boolean;
    radius?: string;
    height?: string;
    width?: string;
}

const Container : any = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* border: ${({ color }) => color?  `1px solid ${color}` : ''}; */
    background-color: ${({ outline, color }) => !outline? color? color : '' : 'transparent'};
    border-radius: ${({ radius }) => radius? radius : '30px'};
    height: ${({ height }) => height? height : 'auto'};
    width: ${({ width }) => width? width : 'auto'};
    img{
        width: 15px;
        height: 15px;
        margin-left: 5px;
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
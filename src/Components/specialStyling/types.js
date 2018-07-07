import styled, { css } from 'styled-components';

export const Rotatep = styled.p`
    color: #424242;
    display: flex;
    transform: scaleY(1.4);

    ${({ degree }) => degree && css`
        
        -webkit-transform: rotate(${degree}deg);

        -moz-transform: rotate(${degree}deg);

        -ms-transform: rotate(${degree}deg);

        -o-transform: rotate(${degree}deg);

        transform: rotate(${degree}deg);
    `}
    
`;

export const Div = styled.div`
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s;


    ${({ isDoneLoading }) => isDoneLoading && css`
        visibility: visible;
        opacity: 1;
    `}

`;
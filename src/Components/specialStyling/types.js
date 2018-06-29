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
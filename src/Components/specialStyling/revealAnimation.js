import styled, { css } from 'styled-components';

//Create a paragraph tag that comes with a reveal animation depending on
//the 'hide' pseudo element we create
export const Revealp = styled.p`
    position: relative;
    &:after{
        content: ' ';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: black;

        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 1s
    }

    ${({ hide }) => hide && css`
        &:after{
            transform: rotateY(0deg);
        }
    `}
`;
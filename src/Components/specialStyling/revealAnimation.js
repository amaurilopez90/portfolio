import styled, { css } from 'styled-components';

//Create a paragraph tag that comes with a reveal animation depending on
//the 'hide' pseudo element we create

export const Slidep = styled.div`
    position: relative;
    
    ${({ direction }) => direction && css`
        ${direction}: 0;

        transition: ${direction} 1.5s, visibility 1.5s;
        
        ${({ hide }) => hide && css`
            ${direction}: 60em;
            visibility: hidden;
            
        `}

    `}
`;

export const SlideSideTextLeft = styled.div`
    position: relative;

    transition: transform 1.5s

    ${({ hide }) => hide && css`
        transform: translateY(-200vh);
    `}

`;

export const SlideSideTextRight = styled.div`
    position: relative;

    transition: transform 1.5s

    ${({ hide }) => hide && css`
        transform: translateY(200vh);
    `}

`;

export const FadeIn = styled.div`
    position: relative;

    transition: opacity 1.7s

    ${({ hide }) => hide && css`
        opacity: 0;
    `}

`;

export const Revealp = styled.p`
    position: relative;
    &:after{
        
        content: ' ';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: black;
        
        ${({ transform }) => transform && css`
            transform-origin: ${transform};
        `}

        transform: rotateY(90deg);
        
        transition: transform 1s;
    }

    ${({ hide }) => hide && css`
        &:after{
            transform: rotateY(0deg);
        }
    `}
`;

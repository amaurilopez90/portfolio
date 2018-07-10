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

export const AudioLine = styled.div`
  position: relative;
  width: 460px;
  height: 1em;
  
  &::before,
  .mainLine {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0.4em;
    width: 100%;
    height: 0.2em;
    background-color: #424242;
  }
  .mainLine {
    background-color: rgb(255, 217, 3);
    width: 0%;
    transition: 1s width linear;
    z-index: 1;
  }
`;

export const MusicPlayerContainer = styled.div`
  border: 2px solid #424242;
  padding: 20px;
  align-content: center;
  width: 580px;
  height: 110px;
  position: relative;
  top: 15vh;
  background-color: rgb(255, 251, 202);
  
`;

export const PlayButton = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #424242;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  display: inline-flex;
  transition: transform .2s;

  &:hover{
    transform: scale(1.2);
    p{
      i{
        color: #ff1755;
      }
    }
  }

  p {
    color: #424242;
    margin: auto;
    i{
      margin-bottom: 8px;
      margin-left: 2px;
      transform: scale(1.5);
      transition: color .3s;
    }
  }
`;

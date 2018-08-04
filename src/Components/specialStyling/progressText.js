import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Motion, spring } from 'react-motion';

const ProgressTextDiv = styled.div`
  position: relative;
  display: inline-block;
  @media(max-width: 1920px){
    @media(min-height: 1080px){
      left: 7rem;
    }
  }

  @media(max-width: 1680px){
    @media(min-height: 1050px){
        left: 4rem;
    }
  }

  @media(max-width: 1600px){
    @media(min-height: 900px){
        left: 3rem;
    }
  }

  @media(max-width: 1536px){
    @media(min-height: 864px){
          left: 2rem;
    }
  }

  @media(max-width: 1440px){
    @media(min-height: 900px){
      left: 4rem;
    }
  }

  @media(max-width: 1366px){
    @media(min-height: 768px){
      left: 4rem;
    }
  }

  @media(max-width: 1280px){
    @media(min-height: 800px){
      left: 0;       
    }
  }

  color: ${({color}) => color};
`;

const ProgressDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: ${({color}) => color};
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  visibility: visible;

  ${({ isDoneLoading }) => isDoneLoading && css`
    visibility: hidden;
    display: inline;
  `}

`;

export default class ProgressText extends Component {
  static propTypes = {
    springOptions: PropTypes.object,
    progress: PropTypes.number.isRequired,
    renderText: PropTypes.func,
    text: PropTypes.string.isRequired,
    placeholderTextColor: PropTypes.string,
    progressTextColor: PropTypes.string
  };

  static defaultProps = {
    springOptions: {},
    progress: 0
  }

  render() {
    const {
      springOptions,
      progress,
      renderText,
      text,
      placeholderTextColor,
      progressTextColor
    } = this.props;

    const textStyle = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    };

    const _renderText = renderText ?
      renderText :
      (props, text) => <h1 {...props}>{text}</h1>;

    return (
      <ProgressTextDiv color={placeholderTextColor}>
        {_renderText({}, text)}
        <ProgressDiv color={progressTextColor}>
          <Motion
            style={{ width: spring(progress, springOptions) }}>
            {({ width }) =>
              _renderText({ style: {
                ...textStyle,
                width: `${width}%`
              }}, text)
            }
          </Motion>
        </ProgressDiv>
      </ProgressTextDiv>
    );
  }
}
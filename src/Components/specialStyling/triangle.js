import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

export default class Triangle extends Component {
  static propTypes = {
    hover: PropTypes.bool
  };

  render() {
    const { hover, ...others } = this.props;
    // Animate slower than default spring animation a bit.
    const animate = (val) => spring(val, {
      stiffness: 110,
      damping: 50
    });
    return (
      <Motion style={{ offset: hover ? animate(0) : animate(271) }}>
        {({ offset }) =>
          <svg
            {...others} // To inherit any props
            width="120px"
            height="120px"
            viewBox="-4 -10 57 106">
            <polygon
              strokeDasharray={271} 
              strokeDashoffset={offset}
              stroke="#1DD3CC"
              strokeWidth="10"
              fill="none"
              points="0 42.9371985 0 -0.125603023 46.9776016 42.9371985 0 86">
            </polygon>
            <polygon
              stroke="#1DD3CC"
              strokeWidth="3"
              fill="none"
              points="0 42.9371985 0 -0.125603023 46.9776016 42.9371985 0 86">
            </polygon>
          </svg>
        }
      </Motion>
    );
  }
}
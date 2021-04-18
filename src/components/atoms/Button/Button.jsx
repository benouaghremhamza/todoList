import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borderRadius, height } from 'styled-system';
import { padding } from '@styled-system/space';
import propTypes from '@styled-system/prop-types';
import { themeGet } from '@styled-system/theme-get';

const width = ({ wide }) => wide === 'true' && '100%';
const btnBg = ({ color, skin }) =>
  themeGet(skin === 'outline' ? 'colors.white' : `colors.${color}`);
const btnColor = ({ color, skin }) =>
  themeGet(skin === 'fill' ? 'colors.white' : `colors.${color}`);
const border = ({ skin }) => (skin === 'fill' ? `solid 1px` : 'none');

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  touch-action: manipulation;
  outline: none;
  user-select: none;
  width: ${width};
  color: ${btnColor};
  background: ${btnBg};
  padding: 1rem 2.3rem;
  line-height: 1.5;
  ${height};
  ${borderRadius};
  ${padding};
  border: ${border};
  transition: all 0.2s;

  ${({ animated }) =>
    animated &&
    css`
      box-shadow: rgb(0 0 0 / 20%) 0 0.1rem 0.2rem 0;
      &:hover {
        transform: translateY(-0.1rem);
        box-shadow: rgb(0 0 0 / 20%) 0 0.3rem 0.5rem 0;
      }

      &:active {
        transform: translate(0);
        box-shadow: rgb(0 0 0 / 20%) 0 0.1rem 0.2rem 0;
      }
    `}
`;

const Button = (props) => {
  const {
    to,
    href,
    type,
    wide,
    disabled,
    withAnimation,
    children,
    ...rest
  } = props;
  const isWide = wide.toString();

  return (
    <StyledButton
      disabled={disabled}
      type={type}
      wide={isWide}
      animated={withAnimation}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  withAnimation: PropTypes.bool,
  skin: PropTypes.oneOf(['fill', 'outline']),
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button']),
  borderRadius: propTypes.borderRadius,
  color: propTypes.color,
  padding: propTypes.padding,
};

Button.defaultProps = {
  color: 'black',
  skin: 'fill',
  type: 'button',
  disabled: false,
  wide: false,
  borderRadius: 0,
  padding: 0,
  withAnimation: false,
};

export default Button;

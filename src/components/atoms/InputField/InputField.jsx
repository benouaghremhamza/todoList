import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { width, height, borderRadius, background } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

const StyledInput = styled.input`
  ${width};
  ${height};
  ${borderRadius};
  ${background};
  display: inline-block;
  vertical-align: middle;
  padding: 1.6rem;
  border: 0.1rem solid ${themeGet('colors.lightGray')};
  outline: none;

  ::placeholder {
    color: ${themeGet('colors.gray')};
    font-size: ${themeGet('sizes.sm')};
  }
`;

const InputField = (props) => <StyledInput {...props} />;

InputField.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.string,
  background: PropTypes.string,
  name: PropTypes.string,
  borderRadius: PropTypes.string,
};
InputField.defaultProps = {
  width: '100%',
  height: '100%',
  background: 'transparent',
  name: 'input',
  borderRadius: '0.5rem',
};

export default InputField;

import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';

export default (component) => styled(component)`
  box-shadow: rgb(0 0 0 / 20%) 0 0.2rem 0.5rem 0;
  display: flex;
  flex-direction: row;
  height: 6vh;
  padding: 0 2rem;
  align-items: center;

  .nav-item {
    text-decoration: none;
    font-size: ${themeGet('sizes.sm')};
    font-weight: 400;
    color: ${themeGet('colors.gray')};
    margin-right: 1.5rem;
  }

  .btn {
    background-color: transparent;
    border: none;
    margin-left: auto;
  }
`;

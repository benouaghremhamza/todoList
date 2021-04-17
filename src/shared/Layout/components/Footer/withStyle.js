import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export default (component) => styled(component)`
  height: 5vh;
  padding: 1rem 3rem;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 8%) 0px -2px 5px 0px;

  h6 {
    font-weight: 400;
    font-size: ${themeGet('sizes.md')};
    color: ${themeGet('colors.gray')};
`;

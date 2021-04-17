import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const globalStyles = createGlobalStyle`
  ${reset}

  :root {
    position: relative;    

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
  }
`;

export default memo(globalStyles);

import React from 'react';
import withStyle from './withStyle';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <h6>© {new Date().getFullYear()} TodoList.</h6>
    </div>
  );
};

export default withStyle(Footer);

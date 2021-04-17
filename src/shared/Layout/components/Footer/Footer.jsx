import React from 'react';
import withStyle from './withStyle';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <h6 className="test">
        © {new Date().getFullYear()} MyWebsite Inc™. ALL RIGHTS RESERVED.
      </h6>
    </div>
  );
};

export default withStyle(Footer);

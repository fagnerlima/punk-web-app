import React from 'react';

import './styles.css';

const CardFooter = ({ children, ...props }) => (
  <footer className="card-footer" {...props}>
    {children}
  </footer>
);

export default CardFooter;

import React from 'react';

import './styles.css';

const CardHeader = ({ children, ...props }) => (
  <header className="card-header" {...props}>
    <h3>{children}</h3>
  </header>
);

export default CardHeader;

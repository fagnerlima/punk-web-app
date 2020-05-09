import React from 'react';

import './styles.css';

const Card = ({ children, ...props }) => (
  <div className="card" {...props}>
    {children}
  </div>
);

export default Card;

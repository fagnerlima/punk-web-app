import React from 'react';

import './styles.css';

const CardContent = ({ children, ...props }) => (
  <div className="card-content" {...props}>
    <p>{children}</p>
  </div>
);

export default CardContent;

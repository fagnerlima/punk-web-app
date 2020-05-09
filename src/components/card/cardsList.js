import React from 'react';

import './styles.css';

const CardsList = ({ children, ...props }) => (
  <div className="cards-list" {...props}>
    {children}
  </div>
);

export default CardsList;

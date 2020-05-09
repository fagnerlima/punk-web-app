import React from 'react';

import './styles.css';

const CardsPage = ({ children, ...props }) => (
  <div className="cards-page" {...props}>
    {children}
  </div>
);

export default  CardsPage;

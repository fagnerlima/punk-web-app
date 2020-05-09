import React from 'react';

import './styles.css';

const HeaderPage = ({ children }) => (
  <header className="header-page">
    <h1>{children}</h1>
  </header>
);

export default HeaderPage;

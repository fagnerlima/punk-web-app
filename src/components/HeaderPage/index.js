import React from 'react';

import './styles.css';

const HeaderPage = ({ children, ...props }) => (
  <header className="header-page" {...props}>
    <h1>{children}</h1>
  </header>
);

export default HeaderPage;

import React from 'react';

import './styles.css';

const Alert = ({ type, children }) => (
  <div className={ 'alert ' + (type ? `alert-${type}` : '') }>
    {children}
  </div>
);

export default Alert;

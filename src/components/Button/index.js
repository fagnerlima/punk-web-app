import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Button = ({ children, color, size, classes, to, type='button', ...props }) => {
  if (type === 'button') {
    return (
      <button className={
          'btn '
          + (color ? `btn-${color} ` : '')
          + (size ? `btn-${size} ` : '')
          + classes
        }{...props}
      >
        {children}
      </button>
    );
  }

  if (type === 'link') {
    return (
      <Link className={
          'btn '
          + (color ? `btn-${color} ` : '')
          + (size ? `btn-${size} ` : '')
          + classes
        }{...props}
        to={to}
      >
        {children}
      </Link>
    );
  }
};

export default Button;

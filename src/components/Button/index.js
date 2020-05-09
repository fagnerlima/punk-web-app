import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

const Button = ({ children, color, size, classes, to, icon, iconPosition = 'left', type='button', ...props }) => {
  if (type === 'button') {
    return (
      <button className={ButtonClassName(color, size, classes)} {...props}>
        {ButtonContent(children, icon, iconPosition)}
      </button>
    );
  }

  if (type === 'link') {
    return (
      <Link className={ButtonClassName(color, size, classes)} {...props} to={to}>
        {ButtonContent(children, icon, iconPosition)}
      </Link>
    );
  }
};

const ButtonClassName = (color, size, classes) => (
  'btn '
    + (color ? `btn-${color} ` : '')
    + (size ? `btn-${size} ` : '')
    + (classes || '')
);

const ButtonContent = (label, icon, iconPosition) => (
  <>
    <div
      className={'btn-content '}
      style={{flexDirection: iconPosition && iconPosition === 'right' ? 'row-reverse' : 'row'}}
    >
      {icon ? <FontAwesomeIcon className="btn-icon" icon={icon} /> : ''}
      <span>{label}</span>
    </div>
  </>
);

export default Button;

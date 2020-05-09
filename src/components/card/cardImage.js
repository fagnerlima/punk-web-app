import React from 'react';

import './styles.css';

const CardImage = ({ url, alt, title, ...props }) => (
  <div className="card-image" {...props}>
    <img src={url} alt={alt} title={title} />
  </div>
);

export default CardImage;

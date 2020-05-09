import React from 'react';

import './styles.css';
import Button from '../Button';

const CardsPaginator = ({ onPrevious, onNext, previousDisabled, nextDisabled, ...props }) => (
  <div className="cards-paginator" {...props}>
    <Button
      color="primary"
      classes="btn-previous"
      onClick={onPrevious}
      disabled={previousDisabled || false}
    >
      Previous
    </Button>
    <Button
      color="primary"
      classes="btn-next"
      onClick={onNext}
      disabled={nextDisabled || false}
    >
      Next
    </Button>
  </div>
);

export default CardsPaginator;

import React from 'react';

import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

import './styles.css';
import Button from '../Button';

const CardsPaginator = ({ onPrevious, onNext, previousDisabled, nextDisabled, ...props }) => (
  <div className="cards-paginator" {...props}>
    <Button
      color="primary"
      classes="btn-previous"
      onClick={onPrevious}
      disabled={previousDisabled || false}
      icon={faBackward}
    >
      Previous
    </Button>
    <Button
      color="primary"
      classes="btn-next"
      onClick={onNext}
      disabled={nextDisabled || false}
      icon={faForward}
      iconPosition="right"
    >
      Next
    </Button>
  </div>
);

export default CardsPaginator;

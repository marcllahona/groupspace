import React from 'react';
import { PropTypes } from 'prop-types';
import * as S from '../../styles';
import { displayErrorMessage } from '../../lib/messages';

function ErrorAlert({ text, error, hide }) {
  return (
    <div>
      <p>{displayErrorMessage(error.message) || text}</p>
      <button onClick={hide}>Ok</button>
    </div>
  );
}

ErrorAlert.propTypes = {
  text: PropTypes.string
};

ErrorAlert.defaultProps = {
  text: 'Ooops! Something went wrong!'
};

export default ErrorAlert;

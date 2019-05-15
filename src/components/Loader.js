import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as S from '../styles';

function Loader({ text }) {
  return ReactDOM.createPortal(
    <aside>
      <S.LoaderContainer>
        <S.LoaderBody>
          <S.LoaderIcon />
          <S.LoaderText>{text}</S.LoaderText>
        </S.LoaderBody>
      </S.LoaderContainer>
    </aside>,
    document.getElementById('modal-root')
  );
}

Loader.propTypes = {
  text: PropTypes.string
};

Loader.defaultProps = {
  text: 'Loading...'
};

export default Loader;

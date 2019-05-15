import styled, {css} from "styled-components";
import PropTypes from "prop-types";

const InputFieldFocus = css`
  border: 1px solid ${props => props.theme.palette.primary};
`;

export const InputField = styled.input`
  font-size: 14px;
  letter-spacing: 1px;
  background-color: ${props => props.theme.palette.backgroundForm};
  color: ${props => props.theme.palette.secondary};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.palette.backgroundForm};
  margin: 0;
  width: 100%;
  height: 50px;
  padding: 0.5em 1em 0.5em 1em;
  line-height: 20px;
  outline: none !important;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  cursor: text;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${props => props.theme.palette.textForm};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${props => props.theme.palette.textForm};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${props => props.theme.palette.textForm};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${props => props.theme.palette.textForm};
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  :focus {
    ${props => props.hideFocus ? 'none' : InputFieldFocus}
  }
`;

InputField.displayName = 'InputField';

InputField.propTypes = {
    primary: PropTypes.bool,
    hideFocus: PropTypes.bool,
};

InputField.defaultProps = {
    primary: false,
    hideFocus: false
};

export const InputLabel = styled.label`
  font-size: 14px;
  line-height: 35px;
  font-weight: bold;
  letter-spacing: 1.25px;
  color: ${props => props.theme.palette.textForm};
  padding: 1em 0 1em 0;
`;

InputLabel.displayName = 'InputLabel';

export const InputBody = styled.div`
  position: relative;
  text-align: start;
  width: 100%;
`;

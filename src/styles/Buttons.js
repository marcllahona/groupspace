import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Button used with Actions.
 */
export const Button = styled.button`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;
  background-color: ${props =>
    props.inverted
        ? props.theme.palette.inverted
        : props.theme.palette.primary};
  color: ${props =>
    props.inverted
        ? props.theme.palette.primary
        : props.theme.palette.inverted};
  border-radius: ${props => props.border_radius}px;
  border: none;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  height: ${props =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  transition: all 0.2s ease 0s;

  :hover {
    opacity: 0.75;
  }
`;

Button.displayName = 'Button';

Button.propTypes = {
    inverted: PropTypes.bool,
    border_radius: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Button.defaultProps = {
    inverted: false,
    border_radius: 6,
    height: 50,
    width: 'auto'
};

/**
 * Button used with Forms.
 */
export const FormButton = styled.button`
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 14px;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.inverted};
  border-radius: ${props => props.border_radius}px;
  border: none;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  height: ${props =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
  min-width: ${props => props.min_width}px;
  transition: all 0.2s ease 0s;
  opacity: ${props => (props.disabled ? 0.5 : 1.0)};

  :hover {
    opacity: 0.5;
  }
`;

FormButton.displayName = 'FormButton';

FormButton.propTypes = {
    disabled: PropTypes.bool,
    border_radius: PropTypes.number,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min_width: PropTypes.number
};

FormButton.defaultProps = {
    disabled: false,
    border_radius: 6,
    height: 50,
    min_width: 200
};

/**
 * Circular Button used with Actions.
 */
export const CircularButton = styled.button`
  background-color: ${props => props.theme.palette[props.color]};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 15px;
  padding: 5px;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  :hover,
  :focus,
  :active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

CircularButton.displayName = 'CircularButton';

CircularButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
    size: PropTypes.number
};

CircularButton.defaultProps = {
    size: 50
};

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ styles, icon, ...rest }, ref) {
  return (
    <Container style={styles}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  styles: PropTypes.oneOf([
    PropTypes.instanceOf(Object),
    PropTypes.instanceOf(Array),
  ]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  styles: {},
  icon: null,
};

export default forwardRef(Input);

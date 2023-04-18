import React from 'react';
import { Button as ButtonAntD } from 'antd';

const Button = ({ text, type = 'primary', size = 'large' }) => {
  return (
    <ButtonAntD block={true} size={size} type={type}>
      {text}
    </ButtonAntD>
  );
};

export default Button;

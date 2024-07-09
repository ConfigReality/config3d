import React from 'react';
import { ButtonProps } from './button.types';
import { colors } from './button.constants';

export const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  const {primary} = colors;
    // Web environment
    return (
      <button onClick={onPress} style={{
        padding: '10px 20px',
        backgroundColor: primary,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {title}
      </button>
    );

};
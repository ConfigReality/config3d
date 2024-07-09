import React from 'react';
import { ButtonProps } from './button.types';
import { colors } from './button.constants';

export const Button: React.FC<ButtonProps> = ({ title, type = 'primary' }) => {
    // Web environment
    return (
      <button style={{
        padding: '10px 20px',
        backgroundColor: colors[type],
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        {title}
      </button>
    );

};
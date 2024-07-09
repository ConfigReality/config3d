import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './button.types';
import { colors } from './button.constants';


export const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  const {primary} = colors;
  return (
  
  <TouchableOpacity onPress={onPress} style={{
    padding: 10,
    backgroundColor: primary,
    borderRadius: 5,
  }}>
    <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
  </TouchableOpacity>
)};

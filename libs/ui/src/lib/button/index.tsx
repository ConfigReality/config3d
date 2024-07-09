import { isWeb } from '../platform';

export { ButtonProps } from './button.types';

export const Button = isWeb
  ? require('./button.web').Button
  : require('./button.native').Button;
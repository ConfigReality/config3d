import { Type } from "./button.types";

type Colors = {
  [K in Type]?: string;
}

export const colors: Colors = {
  primary: '#E29578',
  secondary: 'blue'
};
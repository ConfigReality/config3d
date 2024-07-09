export type Type = 'primary' | 'secondary';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  type: Type;
}
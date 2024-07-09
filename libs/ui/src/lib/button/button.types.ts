export type Type = 'primary' | 'secondary';

export interface ButtonProps {
  title: string;
  type?: Type;
  onPress?: () => void;
}
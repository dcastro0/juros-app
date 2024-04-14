import { RadioButtonProps } from "react-native-paper";

interface MyRadioProps extends RadioButtonProps {
  value: string;
  onValueChange: (newValue: string) => void;
}

export {MyRadioProps}
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps  {
  label: string,
  error: boolean,
}

export {InputProps}
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { Input } from "./Input";
import { ControlledInputProps } from "../types/ControlledInputProps";

function ControlledInput<FormType extends FieldValues>({
  control,
  name,
  calculo,
  ...inputProp
}: UseControllerProps<FormType> & ControlledInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          {...inputProp}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          editable={calculo === name ? false : true}
        />
      )}
    />
  );
}

export { ControlledInput };

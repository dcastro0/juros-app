import { useForm } from "react-hook-form";
import { FormSchemaProps } from "../types/FormSchemaProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schema/formSchema";
import { useResult } from "../hooks/useResult";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { MyButton } from "./MyButton";
import { MyFormProps } from "../types/MyFormProps";
import { ControlledInput } from "./ControlledInput";

const MyForm: React.FC<MyFormProps> = ({ calculo }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: FormSchemaProps ) => useResult(data);

  return (
    <View style={styles.container_form}>
      {calculo !== "capital" ? (
        <ControlledInput
          control={control}
          name="capital"
          calculo={calculo}
          label="Capital"
          placeholder="R$"
        />
      ) : null}

      {calculo !== "taxaJuros" ? (
        <ControlledInput
          control={control}
          name="taxaJuros"
          calculo={calculo}
          label="Taxa de Juros"
          placeholder="%"
        />
      ) : null}

      {calculo !== "tempo" ? (
        <ControlledInput
          control={control}
          name="tempo"
          calculo={calculo}
          label="Tempo"
        />
      ) : null}

      {calculo !== "montante" ? (
        <ControlledInput
          control={control}
          name="montante"
          calculo={calculo}
          label="Montante"
          placeholder="R$"
        />
      ) : null}

      <MyButton title="Submit" onPress={handleSubmit(onSubmit)} />
      
    </View>
  );
};

export { MyForm };

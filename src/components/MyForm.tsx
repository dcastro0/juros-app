import { useForm } from "react-hook-form";
import { FormSchemaProps } from "../types/FormSchemaProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schema/formSchema";
import { useResult } from "../hooks/useResult";
import { Text, View } from "react-native";
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
    resolver: zodResolver(formSchema(calculo)),
  });

  const data = watch();
  const onSubmit = useResult(data);

  return (
    <View style={styles.container_form}>
      {calculo !== "capital" ? (
        <View>
          <ControlledInput
            control={control}
            name="capital"
            calculo={calculo}
            label="Capital"
            placeholder="R$"
            error={errors.capital ? true: false}
          />
          {errors.capital && <Text style={styles.textError}>{errors.capital.message}</Text>}
        </View>
      ) : null}

      {calculo !== "taxaJuros" ? (
        <View>
          <ControlledInput
            control={control}
            name="taxaJuros"
            calculo={calculo}
            label="Taxa de Juros"
            placeholder="%"
            error={errors.taxaJuros ? true: false}
          />
          {errors.taxaJuros && <Text style={styles.textError}>{errors.taxaJuros.message}</Text>}
        </View>
      ) : null}

      {calculo !== "tempo" ? (
        <View>
          <ControlledInput
            control={control}
            name="tempo"
            calculo={calculo}
            label="Tempo"
            error={errors.tempo ? true: false}
          />
          {errors.tempo && <Text style={styles.textError}>{errors.tempo.message}</Text>}
        </View>
      ) : null}

      {calculo !== "montante" ? (
        <View>
          <ControlledInput
            control={control}
            name="montante"
            calculo={calculo}
            label="Montante"
            placeholder="R$"
            error={errors.montante ? true: false}
          />
          {errors.montante && <Text style={styles.textError}>{errors.montante.message}</Text>}
        </View>
      ) : null}

      <MyButton title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export { MyForm };

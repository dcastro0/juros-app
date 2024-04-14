import {  Text, View } from "react-native";
import { useForm, Controller, Form } from "react-hook-form";
import { styles } from "../styles/styles";
import { FormDataProps } from "../types/FormData";
import { Input } from "./Input";
import { MyButton } from "./MyButton";


const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormDataProps>({
    defaultValues: {
      capital: "",
      taxaJuros: "",
      tempo: "",
      montante: "",
    },
  });
  const onSubmit = (data: FormDataProps) => console.log(data);
  const watchedValues = watch()
  return (
    <View style={styles.container_form}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Capital"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="capital"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Taxa de Juros"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="taxaJuros"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Input
            label="Tempo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          
          </View>
        )}
        name="tempo"
      />
      <Controller
        control={control}
        
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Montante"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="montante"
      />

      <MyButton title="Submit" onPress={handleSubmit(onSubmit)} />
      
    </View>
  );
};

export { MyForm };

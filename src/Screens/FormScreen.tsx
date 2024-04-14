import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "../styles/styles";
import { Input } from "../components/Input";
import { MyButton } from "../components/MyButton";
import { NavigationProps } from "../types/NavigationProps";
import { SafeAreaView } from "react-native-safe-area-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaProps } from "../types/FormSchemaProps";
import { formSchema } from "../schema/formSchema";
import { useResult } from "../hooks/useResult";
import { MyForm } from "../components/MyForm";

const FormScreen: React.FC<NavigationProps> = ({route}) => {
  const { calculo } = route.params as { calculo: string };
  

  return (
    <SafeAreaView style={styles.container}>
      <MyForm calculo={calculo} />
    </SafeAreaView>
  );
};

export { FormScreen };

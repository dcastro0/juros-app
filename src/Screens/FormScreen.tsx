import { Text } from "react-native";
import { styles } from "../styles/styles";
import { NavigationProps } from "../types/NavigationProps";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyForm } from "../components/MyForm";

const FormScreen: React.FC<NavigationProps> = ({ route }) => {
  const { calculo } = route.params as { calculo: string };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Juros Simples</Text>
      <MyForm calculo={calculo} />
    </SafeAreaView>
  );
};

export { FormScreen };

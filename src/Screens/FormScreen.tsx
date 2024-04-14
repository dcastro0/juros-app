import { MyForm } from "../components/MyForm";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { NavigationProps } from "../types/NavigationProps";

const FormScreen: React.FC<NavigationProps> = ({navigation}) => {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora de Juros Simples</Text>
      <MyForm />
      
    </SafeAreaView>
  );
};

export { FormScreen };

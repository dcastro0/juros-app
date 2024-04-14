import { SafeAreaView, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { MyButton } from "../components/MyButton";
import { NavigationProps } from "../types/NavigationProps";

const HomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>O que deseja calcular?</Text>
      <View style={styles.container_form}>
        <MyButton
          title="Capital"
          onPress={() => navigation.navigate("Form", { calculo: "capital" })}
        />
        <MyButton
          title="Taxa de Juros"
          onPress={() => navigation.navigate("Form", { calculo: "taxaJuros" })}
        />
        <MyButton
          title="Tempo"
          onPress={() => navigation.navigate("Form", { calculo: "tempo" })}
        />
        <MyButton
          title="Montante"
          onPress={() => navigation.navigate("Form", { calculo: "montante" })}
        />
      </View>
    </SafeAreaView>
  );
};

export { HomeScreen };

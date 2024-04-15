import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProps } from "../types/NavigationProps";
import { FormSchemaProps } from "../types/FormSchemaProps";
import { styles } from "../styles/styles";

const ResultScreen: React.FC<NavigationProps> = ({ route }) => {
  const { resultado, data } = route.params as { resultado: number, data:FormSchemaProps };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_form}>
        <Text style={styles.title}>O resultado é: </Text>
        <Text style={styles.title}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
};

export { ResultScreen };

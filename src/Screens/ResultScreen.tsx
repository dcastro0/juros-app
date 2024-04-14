import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProps } from "../types/NavigationProps";
import { FormSchemaProps } from "../types/FormSchemaProps";

const ResultScreen: React.FC<NavigationProps> = ({ route }) => {
  const { resultado } = route.params as { resultado: number };
  return (
    <SafeAreaView>
      <Text>{resultado}</Text>
    </SafeAreaView>
  );
};

export { ResultScreen };

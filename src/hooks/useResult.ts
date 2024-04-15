import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/RootStackParamList";
import { FormSchemaProps } from "../types/FormSchemaProps";

const useResult = (data: FormSchemaProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToResult = () => {
    navigation.navigate("Resultado", { resultado: 1, data: data });
  };
  return navigateToResult;
};

export { useResult };

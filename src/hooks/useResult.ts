import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/RootStackParamList";
import { useForNumber } from "./useForNumber";



const useResult = (data: {}) => {
  const dataNumber = useForNumber(data);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToResult = () => {
    navigation.navigate("Resultado", {resultado: 1 })
  }
  return navigateToResult
};

export { useResult };

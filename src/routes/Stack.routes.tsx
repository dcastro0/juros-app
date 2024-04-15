import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { FormScreen } from "../Screens/FormScreen";
import { ResultScreen } from "../Screens/ResultScreen";

const StackRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Resultado" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {StackRoutes}

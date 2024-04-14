import { useFonts } from "@expo-google-fonts/roboto";
import { Roboto_900Black } from "@expo-google-fonts/roboto";
import { StackRoutes } from "./src/routes/Stack.routes";

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <StackRoutes />;
};

export default App;

import { NativeStackNavigationProp, NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RootStackParamList } from "./RootStackParamList";

interface NavigationProps extends NativeStackScreenProps<RootStackParamList>{

}

export {NavigationProps}
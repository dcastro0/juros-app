
import { FormSchemaProps } from "./FormSchemaProps";

type RootStackParamList = {
  Home: undefined;
  Form: {calculo: string};
  Resultado: {resultado: number, data:FormSchemaProps};
};

export {RootStackParamList}
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { TextInputProp } from "../types/TextInputProps";

const Input: React.FC<TextInputProp> = ({ label, ...rest }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput {...rest} style={styles.input} keyboardType="numeric" />
    </View>
  );
};

export {Input}
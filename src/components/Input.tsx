import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { InputProps } from "../types/TextInputProps";

const Input: React.FC<InputProps> = ({ error, label, ...rest }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <View style={error && styles.error}>
        <TextInput {...rest} style={styles.input} keyboardType="numeric" />
      </View>
    </View>
  );
};

export { Input };

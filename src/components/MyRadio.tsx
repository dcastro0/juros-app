import { Text, View } from "react-native";
import { RadioButton, RadioButtonProps } from "react-native-paper";
import { styles } from "../styles/styles";
import { MyRadioProps } from "../types/MyRadioProps";

const MyRadio = ({ onValueChange, value }: MyRadioProps) => {
  return (
    <RadioButton.Group onValueChange={onValueChange} value={value}>
      <View style={styles.radios}>
        <RadioButton value="dia" color='#00dffc' uncheckedColor="#fff" />
        <Text style={styles.text}>Dia</Text>

        <RadioButton value="mes" color='#00dffc' uncheckedColor="#fff" />
        <Text style={styles.text}>Mês</Text>

        <RadioButton value="ano" color='#00dffc' uncheckedColor="#fff" />
        <Text style={styles.text}>Ano</Text>
      </View>
    </RadioButton.Group>
  );
};

export { MyRadio };

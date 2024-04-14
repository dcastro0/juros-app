import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import React from "react";
import { MyButtonProps } from "../types/MyButtonProps";


const MyButton: React.FC<MyButtonProps> = ({ title, ...rest }) => {
  return (
    <View>
      <TouchableOpacity {...rest} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { MyButton };

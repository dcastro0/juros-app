import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { RadioButton } from "react-native-paper";

import { useFonts } from "@expo-google-fonts/roboto";

import { Roboto_900Black } from "@expo-google-fonts/roboto";

const App = () => {
  const [checkedJuros, setCheckedJuros] = React.useState("");
  const [checkedTempo, setCheckedTempo] = React.useState("");

  const [fontsLoaded] = useFonts({
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calculadora de Juros Simples</Text>
      </View>

      <View style={styles.container_form}>
        <View>
          <Text>Capital</Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Text>Juros</Text>
          <TextInput style={styles.input} />

          <View style={styles.radios}>
            <View style={styles.radios}>
              <RadioButton
                value="mes"
                status={checkedJuros === "mes" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedJuros("mes");
                }}
              />
              <Text>Mês</Text>
            </View>

            <View style={styles.radios}>
              <RadioButton
                value="dia"
                status={checkedJuros === "dia" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedJuros("dia");
                }}
              />
              <Text>Dia</Text>
            </View>

            <View style={styles.radios}>
              <RadioButton
                value="ano"
                status={checkedJuros === "ano" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedJuros("ano");
                }}
              />
              <Text>Ano</Text>
            </View>
          </View>
        </View>

        <View>
          <Text>Tempo</Text>
          <TextInput style={styles.input} />

          <View style={styles.radios}>
            <View style={styles.radios}>
              <RadioButton
                value="mes"
                status={checkedTempo === "mes" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedTempo("mes");
                }}
              />
              <Text>Mês</Text>
            </View>

            <View style={styles.radios}>
              <RadioButton
                value="dia"
                status={checkedTempo === "dia" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedTempo("dia");
                }}
              />
              <Text>Dia</Text>
            </View>

            <View style={styles.radios}>
              <RadioButton
                value="ano"
                status={checkedTempo === "ano" ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedTempo("ano");
                }}
              />
              <Text>Ano</Text>
            </View>
          </View>
        </View>

        <View>
          <Text>Montante</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text_white}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  container_form: {
    flex: 0.6,
    backgroundColor: "#adadad",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 30,
    padding: 20,
  },

  radios: {
    flex: 0,
    alignItems: "center",
    flexDirection: "row",
  },

  title: {
    paddingBottom: 100,
    fontSize: 30,
    fontFamily: "Roboto_900Black",
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  input_group: {
    padding: 20,
  },

  header: {
    width: 1000,
    height: 40,
    backgroundColor: "blue",
  },

  button: {
    backgroundColor: "blue",
    width: 200,
    height: 35,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    paddingTop: 10,
  },

  text_white: {
    color: "white",
  },
});

export { App };

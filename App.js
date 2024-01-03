import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./screen/Login";
import { colors } from "./colors/colors";
import SingUp from "./screen/SingUp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/home";
import axios from "axios";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="SingUp">
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

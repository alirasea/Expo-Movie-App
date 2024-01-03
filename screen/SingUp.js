import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors/colors";
import axios from "axios";

const SingUp = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submit, setSubmit] = useState(false);

  const singin = async () => {
    if (password && username && email) {
      setSubmit(true, [username, email, password]);
      navigation.navigate("Login", { submit });
    }
     console.log([username, email, password]);
    try {
      const response = await axios.post("http://127.0.0.1:8000/", {
        username: username,
      });
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.log}>SingUP</Text>

        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username"
          ketboardType="username"
          onChangeText={(username) => setUsername(username)}
          auto
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          ketboardType="email-adress"
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          ketboardType="password"
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={singin}>
          <Text style={styles.login_button}>SingUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    borderRadius: 10,
  },

  log: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 25,
  },

  input: {
    backgroundColor: "white",
    width: 300,
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.red,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  login_button: {
    textAlign: "center",
    fontWeight: "bold",
  },
});



import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors/colors";

const Login = ({ navigation,route }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loginDetails, setLoginDetails] = useState([]);

  const login = () =>{
    if (email && password) {
      setLoginDetails([email , password])
      navigation.navigate('Home', {loginDetails})
    }
    console.log(route.params.singupdetails);
  }

  
 

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.log}>Login</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          ketboardType="email-adress"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          ketboardType="password"
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity style={styles.button} onPress={login} >
          <Text style={styles.login_button}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Login;

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

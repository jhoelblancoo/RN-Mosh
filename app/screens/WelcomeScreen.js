import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mesi.jpg")}
    >
      <View style={styles.logotext}>
        <Image style={styles.logo} source={require("../assets/barca.png")} />{" "}
        <Text> Encara mesi </Text>{" "}
      </View>{" "}
      <View style={styles.loginbutton}> </View>{" "}
      <View style={styles.registerbutton}> </View>{" "}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "khaki",
  },
  registerbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "black",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logotext: {
    position: "absolute",
    top: 25,
    color: "white",
    font: "white",
    alignItems: "center",
  },
});
export default WelcomeScreen;

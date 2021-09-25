import React from "react";
import { Image, View } from "react-native";

import colors from "../config/colors";
function ViewImageScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: colors.primary,
          position: "absolute",
          top: 45,
          left: 30,
        }}
      ></View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "lightgreen",
          position: "absolute",
          top: 45,
          right: 30,
        }}
      ></View>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={require("../assets/barca.png")}
      />
    </View>
  );
}

export default ViewImageScreen;

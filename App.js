// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={4} onPress={handlePress}>
        Open up App.js to start working on
        3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33your app!
      </Text>
      <TouchableHighlight onPress={() => console.log("Image tap")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button
        color="green"
        title="tocate, tocate tocate "
        onPress={() =>
          Alert.alert("Ra rauw", "esta noche pol video", [
            { text: "Pendiente", onPress: () => console.log("wisin") },
            { text: "que te ", onPress: () => console.log("yandel") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

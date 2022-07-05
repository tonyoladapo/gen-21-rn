import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import chick from "./assets/chick.jpeg";

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Image style={{ height: 100, width: 200 }} source={chick} />
      <Image
        style={{ height: 100, width: 200 }}
        source={{
          uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        }}
      />
      <Button title="Press" />

      <TouchableOpacity style={{ backgroundColor: "red" }}>
        <Text>Press</Text>
        <Image style={{ height: 100, width: 200 }} source={chick} />
      </TouchableOpacity>

      <TextInput />
    </View>
  );
};

export default App;

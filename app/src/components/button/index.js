import { TouchableOpacity, Text } from "react-native";
import React from "react";

export function SearchButton({
  action = () => {
    console.log("Clicked !");
  },
}) {
  return (
    <TouchableOpacity onPress={() => action()}>
      <Text>Search</Text>
    </TouchableOpacity>
  );
}

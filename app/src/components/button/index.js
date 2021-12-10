import { TouchableOpacity, Text } from "react-native";
import React from "react";

import styles from "../../../assets/styles/pages-base";

export function SearchButton({
  action = () => {
    console.log("Clicked !");
  },
}) {
  return (
    <TouchableOpacity style={styles.searchButton} onPress={() => action()}>
      <Text>🔍 Search</Text>
    </TouchableOpacity>
  );
}

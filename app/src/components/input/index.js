import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useEffect } from "react";
import styles from "../../../assets/styles/pages-base";

export function Input({ callBack = () => {}, value }) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Enter git username..."
        defaultValue={value}
        onChangeText={callBack}
      />
    </View>
  );
}

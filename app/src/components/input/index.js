import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useEffect } from "react";

export function Input({ callBack = () => {}, value }) {
  return (
    <View>
      <TextInput
        placeholder="Enter git username..."
        defaultValue={value}
        onChangeText={callBack}
      />
    </View>
  );
}

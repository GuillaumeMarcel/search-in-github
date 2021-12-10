import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

export function Card({ user, setUser }) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Image style={styles.logo} source={{ uri: user.avatar_url }} />
      <ScrollView>
        {Object.keys(user).map((info, index) => (
          <Text key={index}>{info + " : " + user[info]}</Text>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => setUser(null)}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

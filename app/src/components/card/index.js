import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import styles from "../../../assets/styles/pages-base";

export function Card({ user, setUser }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: user.avatar_url }} />
        <Text style={styles.title}>{user.login}</Text>
      </View>
      <ScrollView>
        {Object.keys(user).map((info, index) => (
          <View key={index} style={styles.mapBox}>
            <Text style={styles.key}>{info + " : "}</Text>
            <Text style={styles.value}>{user[info]}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => setUser(null)} style={styles.footer}>
        <Text style={styles.buttonBack}>⬅ BACK</Text>
      </TouchableOpacity>
    </View>
  );
}

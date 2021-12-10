import React from "react";
import { Text, View } from "react-native";
import { Input } from "../components/input";
import { SearchButton } from "../components/button";
import { Card } from "../components/card";

import styles from "../../assets/styles/pages-base";
//API
import { searchUser } from "../api";

export default function Home() {
  const [username, setUsername] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const sendUsername = async () => {
    if (username) {
      const { data } = await searchUser(username);
      setUser(data.data);
    }
  };

  return (
    <View>
      {user ? (
        <Card user={user} setUser={setUser} />
      ) : (
        <View>
          <Text>Welcome to github searcher 🐙</Text>
          <Input callBack={setUsername} value={username} />
          <SearchButton action={() => sendUsername(username)} />
        </View>
      )}
    </View>
  );
}

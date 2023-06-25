import { StyleSheet, useColorScheme, TouchableOpacity, Switch, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { useState } from "react";

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  const [is, setIs] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign name="upcircle" size={150} color={Colors[colorScheme ?? "light"].text} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="downcircle" size={150} color={Colors[colorScheme ?? "light"].text} />
        </TouchableOpacity>
      </View>
      <View style={styles.switch}>
        <Switch
          value={is}
          style={{ transform: [{ scale: 3 }] }}
          onValueChange={() => setIs((p) => !p)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 96,
  },
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 96,
  },
  switch: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.appBody}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
    backgroundColor: "#bec2cb",
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 5,
  },
});

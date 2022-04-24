import { Text, View } from "react-native";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

export default function ListDrinks() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ backgroundColor: Colors[colorScheme].background, flex: 1 }}>
      <Text>Lista</Text>
    </View>
  );
}

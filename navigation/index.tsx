/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DrinkName from "../screens/CreateDrinks/Steps/DrinkName";
import ListDrinks from "../screens/ListDrinks";
// import ModalScreen from "../screens/ModalScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={ListDrinks}
        options={({ navigation }) => ({
          title: "",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome5
                name="plus-circle"
                size={25}
                color={Colors[colorScheme].text}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: "modal",
          title: "Preparando Drink",
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Root")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="angle-left"
                size={24}
                color={Colors[colorScheme].text}
              />
            </Pressable>
          ),
        })}
      >
        <Stack.Screen name="Modal" component={DrinkName} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

import * as React from "react";
import { Button, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createDrawerNavigator } from "@react-navigation/drawer";

import "react-native-gesture-handler";
import Query from "./components/Query";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home!</Text>
      <Query />
    </View>
  );
}

function SettingsScreen() {
  return <MyDrawer />;
}
function HomeScreen2() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen2() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>sdfsd!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeScreen2} />
      <Drawer.Screen name="Article" component={SettingsScreen2} />
    </Drawer.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen name="Homsdfe" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

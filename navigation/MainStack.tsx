import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

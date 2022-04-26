import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Headphone1 from "./Pages/ItemsPage/Headphone1"
import Headphone2 from "./Pages/ItemsPage/Headphone2"

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CheckOut"
          component={CheckOut}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Headphone1"
          component={Headphone1}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Headphone2"
          component={Headphone2}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

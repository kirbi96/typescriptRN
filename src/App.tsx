import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {enableScreens} from "react-native-screens";
import MainStack from "./screens/Main";
import {Provider} from "react-redux";
import {store} from "./redux";

const App = () => {
    enableScreens()
    const AppStack = createNativeStackNavigator()

  return (
      // <Provider store={store}>
          <NavigationContainer>
              <AppStack.Navigator
                  screenOptions={{
                      headerShown: false,
                  }}
              >
                  <AppStack.Screen name="MainStack" component={MainStack} />
              </AppStack.Navigator>
          </NavigationContainer>
      // </Provider>
  );
};

export default App;

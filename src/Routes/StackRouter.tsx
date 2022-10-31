import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { MapScreen } from "../screens/MapScreen/MapScreen";

// create a stack navigator
const { Navigator, Screen } = createNativeStackNavigator();

// create a stack navigator component
export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Screen
          options={{
            headerShown: false,
          }}
          name="MapScreen"
          component={MapScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}; // end StackRouter

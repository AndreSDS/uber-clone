import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RideOptionsCard } from "../components/RideOptionsCard/RideOptionsCard";
import { Home } from "../screens/Home/Home";
import { MapScreen } from "../screens/MapScreen/MapScreen";
import { NavigateCard } from "../screens/NavigateCard/NavigateCard";

// create a stack navigator
const { Navigator, Screen } = createNativeStackNavigator();

// create a stack navigator component
export const MapRoutes = () => {
  return (
    <Navigator>
      <Screen
        options={{
          headerShown: false,
        }}
        name="NavigateCard"
        component={NavigateCard}
      />

      <Screen
        options={{
          headerShown: false,
        }}
        name="RideOptionsCard"
        component={RideOptionsCard}
      />
    </Navigator>
  );
};

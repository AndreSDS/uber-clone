import React from "react";
import { View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Map } from "../../components/Map/Map";
import { MapRoutes } from "../../Routes/MapRouter";

export const MapScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <MapRoutes />
      </View>
    </SafeAreaView>
  );
};

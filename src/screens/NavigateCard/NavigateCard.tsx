import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesInput } from "../../components/GooglePlacesInput/GooglePlacesInput ";
import { setDestination, setOrigin } from "../../slices/navSlice";

export const NavigateCard = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const handlePress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    dispatch(
      setDestination({
        location: details?.geometry.location,
        description: data.description,
      })
    );

    navigate("RideOptionsCard");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesInput
            handlePress={handlePress}
            placeholder="Where to?"
            styles={{ ...styles }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

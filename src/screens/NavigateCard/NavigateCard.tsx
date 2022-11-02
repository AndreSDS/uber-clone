import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesInput } from "../../components/GooglePlacesInput/GooglePlacesInput ";
import { NavFavourites } from "../../components/NavFavourites/NavFavourites";
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

        <NavFavourites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigate("RideOptionsCard")}
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between items-center`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row bg-white w-24 px-4 py-3 rounded-full justify-between items-center`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
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

import { Image, SafeAreaView, Text, View } from "react-native";
import { useBearStore } from "../../store/BearStore";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { NavOptions } from "../../components/NavOptions/NavOptions";
import { GooglePlacesInput } from "../../components/GooglePlacesInput/GooglePlacesInput ";
import { RootState } from "../../store/store";
import { ILocation, setDestination, setOrigin } from "../../slices/navSlice";

export const Home = () => {
  const { origin } = useSelector((state: RootState) => state.nav);
  const dispatch = useDispatch();

  const handlePress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null = null
  ) => {
    dispatch(
      setOrigin({
        location: details?.geometry.location,
        description: data.description,
      })
    );

    dispatch(setDestination({} as ILocation));
  };

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesInput
          handlePress={handlePress}
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />

        <NavOptions />

        <Text>{origin.description}</Text>
      </View>
    </SafeAreaView>
  );
};

import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

interface GooglePlacesInputProps {
  placeholder: string;
  handlePress: (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => void;
  styles?: {};
}

export const GooglePlacesInput = ({
  placeholder,
  styles,
  handlePress,
}: GooglePlacesInputProps) => {
  return (
    <GooglePlacesAutocomplete
      onPress={handlePress}
      fetchDetails={true}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      placeholder={placeholder}
      minLength={3}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      styles={styles}
    />
  );
};

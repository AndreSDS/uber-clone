import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";

export const Map = () => {
  const mapRef = useRef<MapView>(null);
  const {
    origin: { location: origLocation, description: origDescription },
    destination: { location: destLocation, description: destDescription },
  } = useSelector((state: RootState) => state.nav);

  useEffect(() => {
    if (!origLocation || !destLocation) return;

    // Zoom and fit to markers
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origLocation, destLocation]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: Number(origLocation?.lat),
        longitude: Number(origLocation?.lng),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {destLocation ? (
        <MapViewDirections
          origin={origDescription}
          destination={destDescription}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      ) : null}

      {origLocation ? (
        <Marker
          coordinate={{
            latitude: Number(origLocation?.lat),
            longitude: Number(origLocation?.lng),
          }}
          title="Origin"
          description={origDescription}
          identifier="origin"
        />
      ) : null}

      {destLocation ? (
        <Marker
          coordinate={{
            latitude: Number(destLocation?.lat),
            longitude: Number(destLocation?.lng),
          }}
          title="Destination"
          description={destDescription}
          identifier="destination"
        />
      ) : null}
    </MapView>
  );
};

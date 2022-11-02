import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "react-native-google-places-autocomplete";
import { RootState } from "../store/store";

export interface ILocation {
  location: Point | undefined | null;
  description: string;
}

export interface NavState {
  origin: ILocation;
  destination: ILocation;
  travelTimeInformation: null | object;
}

const initialState: NavState = {
  origin: {
    location: null,
    description: '',
  },
  destination: {
    location: null,
    description: "",
  },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<ILocation>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<ILocation>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<object | null>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;
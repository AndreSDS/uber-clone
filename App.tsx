import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { Routes } from "./src/Routes/StackRouter";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          <Routes />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}

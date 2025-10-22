import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileProvider } from "./src/contexts/ProfileContext";
import Index from "./src/pages/Index";
import ProfileEdit from "./src/pages/ProfileEdit";
import NotFound from "./src/pages/NotFound";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackParamList = {
  Index: undefined;
  Profile: undefined;
  ProfileEdit: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Index" component={Index} options={{ title: "" }} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{ title: "Edit Index" }} />
            <Stack.Screen name="NotFound" component={NotFound} options={{ title: "Not Found" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProfileProvider>
    </SafeAreaProvider>
  );
}
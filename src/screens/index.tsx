import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from "@/screens/LandingScreen";
import DashboardScreen from "@/screens/DashboardScreen";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingScreen">
                <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationScreen;
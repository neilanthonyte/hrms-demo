import React from "react";
import NavigationScreen from "./screens";
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    React.useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000)
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <NavigationScreen />
        </QueryClientProvider>
    )
}

export default App;
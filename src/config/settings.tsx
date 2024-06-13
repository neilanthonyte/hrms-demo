import LandingBG from "@/assets/landing_bg.mp4";
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {View, Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {getState} from "@/utils/globalState";

const appSettings = {
    LANDING_PAGE_BG_IMG: LandingBG,
    COLORS: {
        primary: '#ffffff',
        secondary: '#2389a8',
        tertiary: '#2086b9',
        secondary_rgba: 'rgba(0, 0, 0, 0.5)',
        google_red_color: '#EA4335',
        black: "#000",
        disabled: "#cfcfcf",
        facebook_blue_color: "#1877F2",
        error_red: "#f53105",
        screen_bg: "#ededed",
        faded_secondary: "#37BAE2",
        green: "#00d157",
        darkGreen: "#03ad17",
        darkGray: "#615f5f",
        lightGray: "#b0b0b0"
    },
    TOAST_CONFIG: {
        success: (props: any) => null,
        error: (props: any) => null,
    },
    NAV_HEADER_CONFIG: {
        HEADER: {
            headerStyle: {
                backgroundColor: '#000'
            },
            headerLeft: () => {
                const navigation = getState("navigation");

                return (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" color={appSettings.COLORS.secondary} size={30} />
                    </TouchableOpacity>
                )
            },
            headerTitle: () => (
                <View></View>
            )
        }
    }
}

export default appSettings;
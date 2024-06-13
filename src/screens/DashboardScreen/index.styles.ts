import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width, height} = Dimensions.get("window");
    const TIME_LOG_CONTAINER_HEIGHT = (width / 2) * 0.9;

    return StyleSheet.create({
        container: {
            width,
            flex: 1,
            backgroundColor: COLORS.screen_bg
        },
        userInfoContainer: {
            width,
            height: width * 0.25,
            backgroundColor: COLORS.secondary,
            flexDirection: 'row'
        },
        userDetailsContainer: {
            width: width - (width * 0.25),
            height: width * 0.25,
            padding: 20,
            justifyContent: 'center'
        },
        userAvatarContainer: {
            width: width * 0.25,
            height: width * 0.25,
            justifyContent: 'center',
            alignItems: 'center'
        },
        avatarWrapper: {
            width: (width * 0.25) * 0.65,
            height: (width * 0.25) * 0.65,
            borderRadius: ((width * 0.25) * 0.65) / 2,
            backgroundColor: COLORS.screen_bg,
            overflow: 'hidden'
        },
        profilePic: {
            width: (width * 0.25) * 0.65,
            height: (width * 0.25) * 0.65,
        },
        userDetails: {
            color: COLORS.primary,
        },
        subInfo: {
            fontSize: RFValue(14),
            fontWeight: 'bold',
            color: COLORS.faded_secondary
        },
        subInfoSM: {
            fontSize: RFValue(10),
            color: COLORS.primary
        },
        highlightInfo: {
            fontSize: RFValue(24),
            fontWeight: 'bold'
        }
    })
}

export default useStyles;
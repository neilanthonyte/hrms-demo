import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {scale} from 'react-native-size-matters';
import DeviceInfo from 'react-native-device-info';
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;
const hasNotch = DeviceInfo.hasNotch();

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width, height} = Dimensions.get("window");
    const BTN_CONTAINER_HEIGHT = scale(height * 0.2);

    return StyleSheet.create({
        container: {
            width,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        backgroundVideo: {
            width,
            height
        },
        bgOverlay: {
            position: 'absolute',
            zIndex: 9,
            width,
            height,
            backgroundColor: COLORS.secondary_rgba,
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: scale(width * 0.3),
            height: scale(height * 0.165),
            marginBottom: scale(height * 0.25),
        },
        appTitle: {
            fontWeight: 'bold',
            color: COLORS.primary,
            fontSize: RFValue(12)
        },
        loginBtn: {
            width: scale(width * 0.5),
            height: scale(height * 0.06),
            backgroundColor: COLORS.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: scale(20),
            flexDirection: 'row'
        },
        loginBtnLabel: {
            fontWeight: 'bold',
            color: COLORS.primary,
            marginLeft: 10,
            fontSize: RFValue(16)
        },
        appInfoContainer: {
            marginTop: 20
        },
        appInfo: {
            fontSize: RFValue(10),
            color: COLORS.primary,
            textAlign: 'center'
        },


        formContainer: {
            width: scale(width * 0.8),
            height: scale(height * 0.06),
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            marginTop: 10,
            flexDirection: 'row',
            overflow: 'hidden'
        },
        formContainerFocused: {
            width: scale(width * 0.8),
            height: scale(height * 0.06),
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            marginTop: 10,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: COLORS.secondary,
            overflow: 'hidden'
        },
        inputContainer: {
            flex: 1,
        },
        iconContainer: {
            height: scale(height * 0.06),
            width: scale(height * 0.06),
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        },
    })
}

export default useStyles;
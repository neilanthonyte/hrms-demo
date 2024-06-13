import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {scale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width, height} = Dimensions.get("window");
    const CONTAINER_HEIGHT = scale(height * 0.06);

    return StyleSheet.create({
        outerContainer: {
            marginTop: 10,
        },
        formContainer: {
            width: scale(width * 0.8),
            height: CONTAINER_HEIGHT,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            flexDirection: 'row',
            overflow: 'hidden'
        },
        formContainerFocused: {
            width: scale(width * 0.8),
            height: CONTAINER_HEIGHT,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: COLORS.secondary,
            overflow: 'hidden'
        },
        formContainerError: {
            width: scale(width * 0.8),
            height: CONTAINER_HEIGHT,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: COLORS.error_red,
            overflow: 'hidden'
        },
        inputContainer: {
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 10
        },
        input: {
            height: CONTAINER_HEIGHT * 0.5,
            padding: 0,
            color: COLORS.primary
        },
        iconContainer: {
            height: CONTAINER_HEIGHT,
            width: CONTAINER_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 5
        },
        formLabelContainer: {
            height: CONTAINER_HEIGHT * 0.3,
            paddingLeft: 10,
            justifyContent: 'flex-end'
        },
        formLabelStyle: {
            color: COLORS.primary,
            fontSize: RFValue(10),
            fontWeight: 'bold'
        },
        errorMsg: {
            color: COLORS.error_red,
            fontSize: RFValue(10),
            fontWeight: 'bold',
            textAlign: 'right'
        }
    })
}

export default useStyles;
import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width} = Dimensions.get("window");

    return StyleSheet.create({
        container: {
            width,
            justifyContent: 'center',
            alignItems: 'center'
        },
        innerContainer: {
            width: width * 0.925,
            height: (width / 2) * 0.3,
            flexDirection: 'row',
            marginTop: 10
        },
        iconContainer: {
            height: (width / 2) * 0.3,
            width: (width / 2) * 0.3,
            justifyContent: 'center',
            alignItems: 'center'
        },
        logInfoContainer: {
            width: (width * 0.925) - ((width / 2) * 0.3),
            height: (width / 2) * 0.3,
            backgroundColor: COLORS.primary,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            justifyContent: 'center'
        },
        iconWrapperIn: {
            height: ((width / 2) * 0.3) * 0.65,
            width: ((width / 2) * 0.3) * 0.65,
            borderRadius: (((width / 2) * 0.3) * 0.65) / 2,
            backgroundColor: COLORS.darkGreen,
            justifyContent: 'center',
            alignItems: 'center'
        },
        iconWrapperOut: {
            height: ((width / 2) * 0.3) * 0.65,
            width: ((width / 2) * 0.3) * 0.65,
            borderRadius: (((width / 2) * 0.3) * 0.65) / 2,
            backgroundColor: COLORS.error_red,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            fontWeight: 'bold',
            fontSize: RFValue(14),
            color: COLORS.black
        },
        description: {
            fontSize: RFValue(10),
            color: COLORS.lightGray
        },
        timeStampWrapper: {
            padding: 5,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 9
        },
        timeStampLabel: {
            fontSize: RFValue(10),
            color: COLORS.lightGray
        },
        viewMoreContainer: {
            padding: 10,
            marginTop: 10,
        },
        viewMoreLabel: {
            fontSize: RFValue(12),
            color: COLORS.black,
            fontWeight: 'bold'
        }
    })
}

export default useStyles;
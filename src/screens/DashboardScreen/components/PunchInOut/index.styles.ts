import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {scale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width, height} = Dimensions.get("window");
    const TIME_LOG_CONTAINER_HEIGHT = (width / 2) * 0.9;

    return StyleSheet.create({
        punchInOutContainer: {
            width,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        ioSections: {
            width: width / 2,
            height: width / 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        timeLogContainer: {
            width: (width / 2) * 0.9,
            height: TIME_LOG_CONTAINER_HEIGHT,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            overflow: 'hidden'
        },
        sectionLabelContainer: {
            width: (width / 2) * 0.9,
            height: TIME_LOG_CONTAINER_HEIGHT * 0.25,
            justifyContent: 'center',
            paddingHorizontal: 10
        },
        sectionTimeContainer: {
            width: (width / 2) * 0.9,
            height: TIME_LOG_CONTAINER_HEIGHT * 0.5,
            justifyContent: 'center',
            paddingHorizontal: 10
        },
        sectionPunchBtnContainer: {
            width: (width / 2) * 0.9,
            height: TIME_LOG_CONTAINER_HEIGHT * 0.25,
            justifyContent: 'center',
            alignItems: 'center',
        },
        sectionLabel: {
            fontWeight: 'bold',
            fontSize: RFValue(14),
            color: COLORS.black
        },
        timeLogBtn: {
            height: (TIME_LOG_CONTAINER_HEIGHT * 0.25) * 0.6,
            width: ((width / 2) * 0.9) * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.secondary
        },
        timeLogBtnDisabled: {
            height: (TIME_LOG_CONTAINER_HEIGHT * 0.25) * 0.6,
            width: ((width / 2) * 0.9) * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.disabled
        },
        timeLogBtnLabel: {
            color: COLORS.primary,
            fontSize: RFValue(12)
        },
        timeLogBtnLabelDisabled: {
            color: COLORS.disabled,
            fontSize: RFValue(12)
        },
        dateTimeLabel: {
            color: COLORS.black
        },
        timeLabel: {
            fontSize: RFValue(24),
            fontWeight: 'bold'
        }
    })
}

export default useStyles;
import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import { scale } from "react-native-size-matters";
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width} = Dimensions.get("window");
    
    return StyleSheet.create({
        container: {
            width,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
        },
        subContainer: {
            height: (width / 2) * 0.5,
            width: width * 0.46,
            justifyContent: 'center',
        },
        alignLeft: {
            alignItems: 'flex-start'
        },
        alignRight: {
            alignItems: 'flex-end'
        },
        shadowContainer: {
            height: ((width / 2) * 0.5) * 0.9,
            width: (width * 0.46) * 0.95,
            borderRadius: 8,
            backgroundColor: COLORS.primary,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        },
        innerContainer: {
            height: ((width / 2) * 0.5) * 0.9,
            width: (width * 0.46) * 0.95,
            borderRadius: 8,
            overflow: 'hidden',
            flexDirection: 'row'
        },
        sectionIndicator: {
            height: ((width / 2) * 0.5) * 0.9,
            width: ((width * 0.46) * 0.95) * 0.05,
        },
        presentIndicator: {
            backgroundColor: '#02cc6e'
        },
        absentIndicator: {
            backgroundColor: '#d61702'
        },
        lateIndicator: {
            backgroundColor: '#d6a606'
        },
        holidayIndicator: {
            backgroundColor: '#0995db'
        },
        VLIndicator: {
            backgroundColor: '#9efa61'
        },
        SLIndicator: {
            backgroundColor: '#fab061'
        },
        attendanceInfoContainer: {
            height: ((width / 2) * 0.5) * 0.9,
            flex: 1,
            padding: 10,
        },
        attendanceInfoLabels: {
            fontWeight: 'bold',
            fontSize: RFValue(11),
            color: COLORS.black
        },
        attendanceValue: {
            fontSize: RFValue(24),
            fontWeight: 'bold',
            color: COLORS.black
        },
        leaveStatus: {
            fontSize: RFValue(10),
            color: COLORS.black
        }
    })
}

export default useStyles;
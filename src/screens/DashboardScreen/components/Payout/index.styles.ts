import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const {width, height} = Dimensions.get("window");

    return StyleSheet.create({
        container: {
            width,
            height: (width / 2) * 0.35,
            justifyContent: 'center',
            alignItems: 'center'
        },
        innerContainer: {
            width: width * 0.925,
            backgroundColor: COLORS.primary,
            height: (width / 2) * 0.35,
            borderRadius: 10,
            paddingVertical: 10,
            paddingLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
            overflow: 'hidden'
        },
        salaryInfo: {
            flex: 1,
        },
        dateRange: {
            fontSize: RFValue(10),
            color: COLORS.secondary
        },
        ratePerHr: {
            fontSize: RFValue(10),
            color: COLORS.black
        },
        earning: {
            fontWeight: 'bold',
            color: COLORS.black,
            fontSize: RFValue(24),
        },
        viewSalaryIconContainer: {
            height: (width / 2) * 0.4,
            width: (width / 2) * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
}

export default useStyles;
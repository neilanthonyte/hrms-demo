import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import { useHeaderHeight } from '@react-navigation/elements';
import {RFValue} from 'react-native-responsive-fontsize';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    const headerHeight = useHeaderHeight();
    

    return StyleSheet.create({
        container: {
            position: 'absolute',
            zIndex: 9,
            top: -5,
            left: -5,
            width: headerHeight * 0.3,
            height: headerHeight * 0.3,
            borderRadius: (headerHeight * 0.3) / 2,
            backgroundColor: COLORS.error_red,
            justifyContent: 'center',
            alignItems: 'center'
        },
        notifCounterLabel: {
            fontSize: RFValue(headerHeight * 0.3) * 0.5,
            color: COLORS.primary
        }
    })
}

export default useStyles;
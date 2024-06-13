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
            paddingHorizontal: 15,
            paddingVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
        },
        leftBorder: {
            width: 5,
            height: 20,
            backgroundColor: COLORS.secondary,
            marginRight: 7
        },
        label: {
            color: COLORS.darkGray,
            fontWeight: '500',
            fontSize: RFValue(14)
        }
    })
}

export default useStyles;
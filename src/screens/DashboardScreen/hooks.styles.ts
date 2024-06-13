import {StyleSheet, Dimensions} from "react-native";
import AppSettings from "@/config/settings";
import {scale} from 'react-native-size-matters';
import { useHeaderHeight } from '@react-navigation/elements';

const {COLORS} = AppSettings;

interface StyleProps {}

const useStyles = ({}: StyleProps) => {
    return StyleSheet.create({
        container: {
            
        }
    })
}

export default useStyles;
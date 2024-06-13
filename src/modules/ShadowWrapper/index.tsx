import React from "react";
import {View} from "react-native";
import useStyles from "./index.styles";
import { ReactChildren } from "react-native-toast-message";

interface ShadowWrapperProps {
    children?: ReactChildren,
    width?: number,
    height?: number,
    bgColor?: string,
    borderRadius?: number,
}

const ShadowWrapper = ({children, width, height, bgColor, borderRadius}: ShadowWrapperProps) => {
    const Styles = useStyles({width, height, bgColor, borderRadius});

    return (
        <View style={Styles.container}>
            {children}
        </View>
    )
}

export default ShadowWrapper;
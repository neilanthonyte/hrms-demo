import {StyleSheet} from "react-native";

interface StyleProps {
    width?: number,
    height?: number,
    bgColor?: string,
    borderRadius?: number,
}

const useStyles = ({width, height, bgColor, borderRadius}: StyleProps) => {
    return StyleSheet.create({
        container: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
            backgroundColor: bgColor,
            width, 
            height,
            borderRadius
        }
    })
}

export default useStyles;
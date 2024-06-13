import React from "react";
import {View, Text} from "react-native";
import useStyles from "./index.styles";

interface ListSectionIndicatorProps {
    name?: string
}

const ListSectionIndicator = ({name = ''}: ListSectionIndicatorProps) => {
    const Styles = useStyles({});

    return (
        <View style={Styles.container}>
            <View style={Styles.leftBorder} />
            <Text style={Styles.label}>{name}</Text>
        </View>
    )
}

export default ListSectionIndicator;
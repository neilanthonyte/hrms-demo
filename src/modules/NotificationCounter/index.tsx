import React from "react";
import {View, Text} from "react-native";
import useStyles from "./index.styles";

const NotificationCounter = () => {
    const Styles = useStyles({});

    return (
        <View style={Styles.container}>
            <Text style={Styles.notifCounterLabel}>25</Text>
        </View>
    )
}

export default React.memo(NotificationCounter);
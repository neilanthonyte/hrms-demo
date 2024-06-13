import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "./index.styles";
import ShadowWrapper from "@/modules/ShadowWrapper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppSettings from "@/config/settings";

const {COLORS} = AppSettings;

type DataTypes = {
    id: string,
    title: string,
    type: string,
    description: string
}

const LogActivitiesUI = () => {
    const Styles = useStyles({});
    const data = [
        {id: "1", title: "Time In", type: "time_in", description: "Time in successfully recorded."},
        {id: "2", title: "Time Out", type: "time_out", description: "Time out successfully recorded."},
        {id: "3", title: "Leave Approved", type: "leave_approved", description: "Your leave request has been approved."}
    ];

    return (
        <View style={Styles.container}>
            {
                data.map((d: DataTypes) => {
                    return (
                        <View style={Styles.innerContainer} key={d.id}>
                            <View style={Styles.timeStampWrapper}>
                                <Text style={Styles.timeStampLabel}>1 hour ago</Text>
                            </View>
                            <View style={Styles.iconContainer}>
                                <View style={d.type === "time_in" || d.type === "leave_approved" ? Styles.iconWrapperIn : Styles.iconWrapperOut}>
                                    {
                                        d.type === "time_in" ? (
                                            <Icon name="account-clock" size={25} color={COLORS.primary} />
                                        ) : d.type === "time_out" ? (
                                            <Icon name="clock-end" size={25} color={COLORS.primary} />
                                        ) : d.type === "leave_approved" ? (
                                            <Icon name="thumb-up" size={25} color={COLORS.primary} />
                                        ) : null
                                    }
                                </View>
                            </View>
                            <ShadowWrapper
                                width={Styles.logInfoContainer.width} 
                                height={Styles.logInfoContainer.height}
                                bgColor={Styles.logInfoContainer.backgroundColor}
                                borderRadius={Styles.logInfoContainer.borderRadius}>
                                <View style={Styles.logInfoContainer}>
                                    <Text style={Styles.title}>{d.title}</Text>
                                    <Text style={Styles.description}>{d.description}</Text>
                                </View>
                            </ShadowWrapper>
                        </View>
                    )
                })
            }

            <TouchableOpacity style={Styles.viewMoreContainer}>
                <Text style={Styles.viewMoreLabel}>View More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogActivitiesUI;
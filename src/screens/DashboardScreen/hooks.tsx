import React, {useEffect} from "react";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcons from "react-native-vector-icons/Feather";
import {TouchableOpacity} from "react-native";
import AppSettings from "@/config/settings";
import {scale} from 'react-native-size-matters';
import NotificationCounter from "@/modules/NotificationCounter";
import moment from "moment";

import ListSectionIndicator from "@/modules/ListSectionIndicator";
import PunchInOut from "./components/PunchInOut";
import AttendanceUI from "./components/Attendance";
import LogActivitiesUI from "./components/LogActivities";
import PayoutUI from "./components/Payout";

const {COLORS} = AppSettings;

interface DashboardHooksProps {
    navigation: {
        setOptions: Function
    }
}

export const DashboardHooks = ({navigation}: DashboardHooksProps) => {
    const componentsList = [
        {id: "punchInOut", component: (props: object) => <PunchInOut {...props} />},
        {id: "payout_section", component: (props: object) => <ListSectionIndicator {...props} name="Payout" />},
        {id: "payout_ui", component: (props: object) => <PayoutUI {...props} />},
        {id: "attendance_section", component: (props: object) => <ListSectionIndicator {...props} name={`${moment().format("MMMM")} Attendance`} />},
        {id: "attendance_ui", component: (props: object) => <AttendanceUI {...props} />},
        {id: "activities_section", component: (props: object) => <ListSectionIndicator {...props} name="Recent Activities" />},
        {id: "activities_ui", component: (props: object) => <LogActivitiesUI {...props} />},
        {id: "tasks_section", component: (props: object) => <ListSectionIndicator {...props} name="Recent Tasks" />},
    ];

    useEffect(() => {
        navigation.setOptions({
            title: "Unfold Software Solution",
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTintColor: COLORS.primary,
            headerStyle: {
                backgroundColor: COLORS.secondary,
            },
            headerLeft: () => (
                <TouchableOpacity>
                    <Icon name="menu-fold" size={scale(20)} color={COLORS.primary} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <NotificationCounter />
                    <FeatherIcons name="bell" size={scale(20)} color={COLORS.primary} />
                </TouchableOpacity>
            ),
        })
    }, [])

    return {componentsList}
}
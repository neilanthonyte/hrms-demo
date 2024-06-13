import React, {ReactElement, useCallback} from "react";
import {View, Text, Image, FlatList} from "react-native";
import useStyles from "./index.styles";
import { DashboardHooks } from "./hooks";
import AppSettings from "@/config/settings";
import ProfileImg from "@/assets/profile.png";
import PunchInOut from "./components/PunchInOut";

const {COLORS} = AppSettings;

interface DashboardScreenProps {
    navigation: {
        setOptions: Function
    }
}

type RenderItemType = {
    item: {
        component: Function
    },
    index: number
}

type FlatListExtractorType = {
    id: string
}

const DashboardScreen = ({navigation}: DashboardScreenProps) => {
    const Styles = useStyles({});
    const {componentsList} = DashboardHooks({navigation});

    const renderItem = useCallback((props: RenderItemType) => {        
        return props.item.component(props);
    }, [])

    return (
        <View style={Styles.container}>
            {/** USER INFO CONTAINER */}
            <View style={Styles.userInfoContainer}>
                <View style={Styles.userDetailsContainer}>
                    <Text style={[Styles.userDetails, Styles.subInfo]}>Sr. Mobile App Developer</Text>
                    <Text style={[Styles.userDetails, Styles.highlightInfo]}>Neil Anthony Te</Text>
                    <Text style={[Styles.userDetails, Styles.subInfoSM]}>ID: 165161651</Text>
                </View>
                <View style={Styles.userAvatarContainer}>
                    <View style={Styles.avatarWrapper}>
                        <Image source={ProfileImg} resizeMode="contain" style={Styles.profilePic} />
                    </View>
                </View>
            </View>

            {/** USER PUNCH IN AND OUT INFO */}
            <FlatList
                data={componentsList}
                renderItem={renderItem}
                keyExtractor={(item: FlatListExtractorType) => item.id}
            />
        </View>
    )
}

export default DashboardScreen;
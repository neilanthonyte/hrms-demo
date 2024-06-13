import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import ShadowWrapper from "@/modules/ShadowWrapper";
import useStyles from "./index.styles";
import Icon from "react-native-vector-icons/FontAwesome"
import AppSettings from "@/config/settings";

const {COLORS} = AppSettings;

const PayoutUI = () => {
    const Styles = useStyles({});

    return (
        <View style={Styles.container}>
            <ShadowWrapper
                width={Styles.innerContainer.width} 
                height={Styles.innerContainer.height}
                bgColor={Styles.innerContainer.backgroundColor}
                borderRadius={Styles.innerContainer.borderRadius}>
                <View style={Styles.innerContainer}>
                    <View style={Styles.salaryInfo}>
                        <Text style={Styles.dateRange}>May 15 - May 30</Text>
                        <Text style={Styles.earning}>$800</Text>
                    </View>
                    <TouchableOpacity style={Styles.viewSalaryIconContainer}>
                        <Icon name="chevron-right" size={Styles.viewSalaryIconContainer.width * 0.5} color={COLORS.secondary} />
                    </TouchableOpacity>
                </View>
            </ShadowWrapper>
        </View>
    )
}

export default PayoutUI;
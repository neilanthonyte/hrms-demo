import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "./index.styles";
import ShadowWrapper from "@/modules/ShadowWrapper";
import {PunchInOutHooks} from "./hooks";
import Icon from "react-native-vector-icons/AntDesign"
import AppSettings from "@/config/settings";

const {COLORS} = AppSettings;

const PunchInOut = () => {
    const Styles = useStyles({});
    const {
        currentDay, 
        punchedIn,
        _onPunchIn,
        punchedOut,
        _onPunchOut,
        currentAMPM
    } = PunchInOutHooks();

    return (
        <View style={Styles.punchInOutContainer}>
            {/** TIME IN */}
            <View style={Styles.ioSections}>
                <ShadowWrapper 
                    width={Styles.timeLogContainer.width} 
                    height={Styles.timeLogContainer.height}
                    bgColor={Styles.timeLogContainer.backgroundColor}
                    borderRadius={Styles.timeLogContainer.borderRadius}>
                    <View style={Styles.timeLogContainer}>
                        <View style={Styles.sectionLabelContainer}>
                            <Text style={Styles.sectionLabel}>Time In{`\t\t`}{punchedIn ? (<Icon name="checkcircle" color={COLORS.green} size={15} />) : null}</Text>
                        </View>
                        <View style={Styles.sectionTimeContainer}>
                            <Text style={Styles.dateTimeLabel}>May 5, 2024</Text>
                            <Text style={[Styles.dateTimeLabel, Styles.timeLabel]}>{punchedIn ? punchedIn : `0:00 ${currentAMPM}`}</Text>
                            <Text style={Styles.dateTimeLabel}>{currentDay}</Text>
                        </View>
                        <View style={Styles.sectionPunchBtnContainer}>
                            {!punchedIn ? (<TouchableOpacity style={Styles.timeLogBtn} onPress={_onPunchIn}>
                                <Text style={Styles.timeLogBtnLabel}>Punch In</Text>
                            </TouchableOpacity>) : (
                                <View style={Styles.timeLogBtnDisabled}>
                                    <Text style={Styles.timeLogBtnLabelDisabled}>Checked In</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </ShadowWrapper>
            </View>

            {/** TIME OUT */}
            <View style={Styles.ioSections}>
                <ShadowWrapper 
                    width={Styles.timeLogContainer.width} 
                    height={Styles.timeLogContainer.height}
                    bgColor={Styles.timeLogContainer.backgroundColor}
                    borderRadius={Styles.timeLogContainer.borderRadius}>
                    <View style={Styles.timeLogContainer}>
                        <View style={Styles.sectionLabelContainer}>
                            <Text style={Styles.sectionLabel}>Time Out{`\t\t`}{punchedOut ? (<Icon name="checkcircle" color={COLORS.green} size={15} />) : null}</Text>
                        </View>
                        <View style={Styles.sectionTimeContainer}>
                            <Text style={Styles.dateTimeLabel}>May 5, 2024</Text>
                            <Text style={[Styles.dateTimeLabel, Styles.timeLabel]}>{punchedOut ? punchedOut : `0:00 ${currentAMPM}`}</Text>
                            <Text style={Styles.dateTimeLabel}>Monday</Text>
                        </View>
                        <View style={Styles.sectionPunchBtnContainer}>
                            {!punchedOut ? (<TouchableOpacity style={Styles.timeLogBtn} onPress={_onPunchOut}>
                                <Text style={Styles.timeLogBtnLabel}>Punch Out</Text>
                            </TouchableOpacity>) : (
                                <View style={Styles.timeLogBtnDisabled}>
                                    <Text style={Styles.timeLogBtnLabelDisabled}>Checked Out</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </ShadowWrapper>
            </View>
        </View>
    )
}

export default React.memo(PunchInOut);
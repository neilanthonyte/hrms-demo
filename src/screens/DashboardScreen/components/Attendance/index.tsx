import React from "react";
import {View, Text} from "react-native";
import useStyles from "./index.styles";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome6";

interface AttendanceUIProps {}

const AttendanceUI = ({}: AttendanceUIProps) => {
    const Styles = useStyles({});
    
    return (
        <View style={Styles.container}>
            <View style={[Styles.subContainer, Styles.alignLeft]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.presentIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon1 name="assured-workload" />{`\t\t`}PRESENT</Text>
                            <Text style={Styles.attendanceValue}>16</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, Styles.alignRight]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.absentIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon2 name="user-xmark" />{`\t\t`}ABSENT</Text>
                            <Text style={Styles.attendanceValue}>4</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, Styles.alignLeft]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.lateIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon2 name="user-clock" />{`\t\t`}LATE</Text>
                            <Text style={Styles.attendanceValue}>2</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, Styles.alignRight]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.holidayIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon2 name="calendar-check" />{`\t\t`}HOLIDAYS</Text>
                            <Text style={Styles.attendanceValue}>10</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, Styles.alignLeft]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.VLIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon2 name="plane-departure" />{`\t\t`}VACATION LEAVE</Text>
                            <Text style={Styles.attendanceValue}>2</Text>
                            <Text style={Styles.leaveStatus}>1 pending  •  1 approved</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, Styles.alignRight]}>
                <View style={Styles.shadowContainer}>
                    <View style={Styles.innerContainer}>
                        <View style={[Styles.sectionIndicator, Styles.SLIndicator]}></View>
                        <View style={Styles.attendanceInfoContainer}>
                            <Text style={Styles.attendanceInfoLabels}><Icon1 name="sick" />{`\t\t`}SICK LEAVE</Text>
                            <Text style={Styles.attendanceValue}>2</Text>
                            <Text style={Styles.leaveStatus}>0 pending  •  2 approved</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AttendanceUI;
import React from "react";
import {View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator} from "react-native";
import useStyles from "./index.styles";
import Video from "react-native-video";
import AppSettings from "@/config/settings";
import AppLogo from "@/assets/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { LandingScreenHooks } from "./hooks";
import PackageInfo from '../../../package.json';
import FormInput from "@/modules/FormInput";

interface LandingScreenProps {
    navigation: {
        navigate: Function,
        dispatch: Function
    }
}

const {LANDING_PAGE_BG_IMG, COLORS} = AppSettings;

type ValidationTypes = {
    email?: string,
    password?: string
}

const LandingScreen = ({navigation}: LandingScreenProps) => {
    const Styles = useStyles({});
    const {
        onLogin, 
        setEmail, 
        setPassword, 
        currentFocus,
        setCurrentFocus, 
        validationError,
        setValidationError,
        loading
    } = LandingScreenHooks({navigation});
    const passRef = React.useRef<any>();

    return (
        <View style={Styles.container}>
            <Video
                source={LANDING_PAGE_BG_IMG}                     
                style={Styles.backgroundVideo}
                muted={true}
                repeat={true}
                posterResizeMode="cover"
                resizeMode="cover"
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.bgOverlay}>
                    <Image source={AppLogo} resizeMode="contain" style={Styles.logo} />

                    <FormInput {...{
                        isFocused: currentFocus ==="email" ? true : false,
                        icon: () => <Icon name="envelope" size={30} color={currentFocus ==="email" ? COLORS.secondary : COLORS.primary} />,
                        label: "Email address",
                        secure: false,
                        nativeProps: {
                            underlineColorAndroid: "transparent",
                            keyboardType: "email-address",
                            returnKeyType: "next",
                            onSubmitEditing: () => {
                                if(passRef.current) passRef.current.focus();
                            },
                            onFocus: () => {
                                setCurrentFocus('email');
                                if(validationError["email"]) {
                                    setValidationError((prevState: object) => {
                                        let copyPrevState: ValidationTypes = {...prevState};
                                        delete copyPrevState["email"];

                                        return copyPrevState;
                                    })
                                }
                            },
                            onBlur: () => setCurrentFocus(''),
                            onChangeText: (e: string) => {
                                setEmail(e);
                            }
                        },
                        error: validationError["email"]
                    }} />

                    <FormInput {...{
                        isFocused: currentFocus ==="password" ? true : false,
                        icon: () => <Icon name="eye" size={30} color={currentFocus ==="password" ? COLORS.secondary : COLORS.primary} />,
                        label: "Password",
                        secure: true,
                        nativeProps: {
                            ref: passRef,
                            underlineColorAndroid: "transparent",
                            returnKeyType: "done",
                            onSubmitEditing: onLogin,
                            onFocus: () => {
                                setCurrentFocus('password');
                                if(validationError["password"]) {
                                    setValidationError((prevState: object) => {
                                        let copyPrevState: ValidationTypes = {...prevState};
                                        delete copyPrevState["password"];

                                        return copyPrevState;
                                    })
                                }
                            },
                            onBlur: () => setCurrentFocus(''),
                            onChangeText: (e: string) => {
                                setPassword(e)
                            }
                        },
                        error: validationError["password"]
                    }} />

                    <TouchableOpacity style={Styles.loginBtn} activeOpacity={0.75} onPress={onLogin}>
                        {loading ? <ActivityIndicator color={COLORS.primary} size="large" /> : <Text style={Styles.loginBtnLabel}>Login</Text>}
                    </TouchableOpacity>
                    
                    <View style={Styles.appInfoContainer}>
                        <Text style={Styles.appInfo}>{`v${PackageInfo.version}\n\nCopyright ${new Date().getFullYear()} Developed by Unfold Software Solution`}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LandingScreen;
import React from "react";
import {View, Text, TextInput} from "react-native";
import useStyles from "./index.styles";
import Video from "react-native-video";
import AppSettings from "@/config/settings";
import AppLogo from "@/assets/logo.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { FormInputHooks } from "./hooks";
import PackageInfo from '../../../package.json';

interface FormInputProps {
    isFocused?: boolean,
    icon?: Function,
    label?: string,
    secure?: boolean,
    nativeProps?: object,
    error?: string | null
}

const {COLORS} = AppSettings;

const FormInput = ({
    isFocused = false,
    icon,
    label,
    secure = false,
    nativeProps = {},
    error = null
}: FormInputProps) => {
    const Styles = useStyles({});

    return (
        <View style={Styles.outerContainer}>
            {error ? (<Text style={Styles.errorMsg}>{error}</Text>) : null}
            <View style={isFocused ? Styles.formContainerFocused : error ? Styles.formContainerError : Styles.formContainer}>
                <View style={Styles.inputContainer}>
                    {typeof label !== 'undefined' ? <Text style={Styles.formLabelStyle}>{label}</Text> : null}
                    <TextInput 
                        style={Styles.input}
                        secureTextEntry={secure}
                        {...nativeProps}
                    />
                </View>
                {typeof icon !== 'undefined' && typeof icon === 'function' ? (
                    <View style={Styles.iconContainer}>{icon()}</View>
                ) : null}
            </View>
        </View>
    )
}

export default FormInput;
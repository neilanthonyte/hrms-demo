import React, {useState} from "react";
import { CommonActions } from "@react-navigation/native";

interface LandingScreenHooksProps {
    navigation: {
        navigate: Function,
        dispatch: Function
    }
}

type ValidationTypes = {
    email?: string,
    password?: string
}

export const LandingScreenHooks = ({navigation}: LandingScreenHooksProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentFocus, setCurrentFocus] = useState('');
    const [validationError, setValidationError] = useState<ValidationTypes>({});
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        if(loading) return;

        if(!email && !password || email === '' && password === '') {
            setValidationError({email: "Email is required.", password: "Password is required."})
            return;
        }

        if(!email || email === '') {
            setValidationError({email: "Email is required."});
            return;
        }

        if(!password || password === '') {
            setValidationError({password: "Password is required."});
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            setTimeout(() => {
                try {
                    if(Object.keys(validationError).length > 0) setValidationError({});
        
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                {
                                    name: 'DashboardScreen',
                                    params: {},
                                },
                            ]
                        })
                    )
                } catch (error) {
                    throw error;
                }
            }, 300)
        }, 1000)
    }

    return {
        onLogin,
        setEmail,
        setPassword,
        currentFocus, 
        setCurrentFocus,
        validationError, 
        setValidationError,
        loading
    }
}
import React, {useState} from "react";
import moment from "moment";

export const PunchInOutHooks = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[new Date().getDay()];
    const currentAMPM = moment(new Date()).format("A");
    const [punchedIn, setPunchedIn] = useState<string | null>(null);
    const [punchedOut, setPunchedOut] = useState<string | null>(null);

    const _onPunchIn = () => {
        const currentTime = moment(new Date()).format("hh:mm A");
        setPunchedIn(currentTime);
    }

    const _onPunchOut = () => {
        const currentTime = moment(new Date()).format("hh:mm A");
        setPunchedOut(currentTime);
    }

    return {
        currentDay,
        punchedIn,
        _onPunchIn,
        punchedOut,
        _onPunchOut,
        currentAMPM
    }
}
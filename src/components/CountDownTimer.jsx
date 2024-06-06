import { useEffect, useState } from "react";
import TimeUnit from "./TimeUnit";
import { Box } from "@mui/material";

export default function CountDownTimer() {

    const [timeUnits, setTimeUnits] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const getTimeUnits = () => {
        // Wedding date: August 25th, 2024 at 17:30
        const weddingDateTime = new Date(2024, 7, 25, 17, 30)
        const currentTime = new Date()
        const diff = weddingDateTime - currentTime

        // Calculate time units
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor(diff / 100 / 60 / 60) % 24;
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        return({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setTimeUnits(getTimeUnits())
        }, 1000);
    }, [timeUnits])

    return (
        <>
            <Box className="count-down-container">
                <TimeUnit unit={timeUnits.days} label="DÍAS"/>
                <TimeUnit unit={timeUnits.hours} label="HORAS"/>
                <TimeUnit unit={timeUnits.minutes} label="MINUTOS"/>
                <TimeUnit unit={timeUnits.seconds} label="SEGUNDOS"/>
            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
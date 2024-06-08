import { Box } from "@mui/material";
import "../styles.css";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import CountDownTimer from "../components/CountDownTimer";
import Ceremony from "../components/Ceremony";
import DressCode from "../components/DressCode";
import PhotoGallery from "../components/PhotoGallery";
import Attendance from "../components/Attendance";
import { useEffect, useState } from "react";

export default function Invitation() {

    const [guests, setGuets] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const guestsParam = params.get('guests');
        var guests = 0;
        try {
            if (isNaN(guestsParam) || guestsParam == null) {
                guests = 0;
            } else {
                guests = parseInt(guestsParam);
            }
        } catch(error) {
            guests = 0;
        }
        setGuets(guests)
    }, [])

    return (    
        <Box className="main-container">
            <Header />
            <Introduction />
            <CountDownTimer />
            <Ceremony />
            <DressCode />
            <PhotoGallery />
            <Attendance guests={guests}/>
        </Box>
    )
}
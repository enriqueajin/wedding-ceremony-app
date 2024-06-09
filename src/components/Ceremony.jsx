import { Box, Button, Divider } from "@mui/material";
import rings from "../assets/rings.png";

export default function Ceremony() {
    
    const buttonStyle = { 
        backgroundColor: "#8c9c6d",
        borderRadius: 5,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "nexaextralight",
        fontWeight: 'bold'
    }

    return(
        <>
            <Box className="rings-icon-container">
                <img className="rings" src={rings} />
            </Box>
            <br />
            <p className="ceremony-title">BODA CIVIL</p>
            <br />
            <p className="ceremony-desc">Pizza Vesuvio Cayalá</p>
            <br />
            <p className="ceremony-desc">Te esperamos</p>
            <br />
            <br />
            <Box className="ceremony-details-container">
                <p className="ceremony-date">25 AGO</p>
                <Divider orientation="vertical" variant="li" flexItem/>
                <Box className="ceremony-time-container">
                    <p className="ceremony-time">1:30</p>
                    <p className="ceremony-time-suffix">P.M.</p>
                </Box>
            </Box>
            <br />
            <p className="ceremony-address">CC. Paseo Cayalá, Nivel 1, Local A4-114 zona 16</p>
            <br />
            <br />
            <Button 
                variant="contained"
                href="https://maps.app.goo.gl/RKfQ4BGUi8fUBgT37" 
                target="_blank" 
                style={buttonStyle}>
                VER UBICACIÓN
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
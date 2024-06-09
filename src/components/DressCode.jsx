import { Box } from "@mui/material";
import dresscodeIcon from "../assets/dresscode.png";

export default function DressCode() {
    return (
        <>
            <Box className="dresscode-icon-container">
                <img className="dresscode" src={dresscodeIcon} />
            </Box>
            <br />
            <p className="ceremony-title">DRESSCODE</p>
            <br />
            <p className="dresscode-text">Semiformal</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
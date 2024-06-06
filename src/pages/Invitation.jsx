import { Box } from "@mui/material";
import "../styles.css";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import CountDownTimer from "../components/CountDownTimer";

export default function Invitation() {
    return (
        <Box className="main-container">
            <Header />
            <Introduction />
            <CountDownTimer />
        </Box>
    )
}
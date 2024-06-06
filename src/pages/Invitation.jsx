import { Box } from "@mui/material";
import "../styles.css";
import Header from "../components/Header";
import Introduction from "../components/Introduction";


export default function Invitation() {
    return (
        <Box className="main-container">
            <Header />
            <Introduction />
        </Box>
    )
}
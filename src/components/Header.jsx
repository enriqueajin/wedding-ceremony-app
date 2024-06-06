import { Box } from "@mui/material";
import "../styles.css";

export default function Header() {
    return (
        <>
            <Box className="header-container">
                <img className="header-image" src="../header.jpg" />
            </Box>
            <Box className="main-title">
                <p className="our-wedding">Nuestra boda</p>
                <p className="spouses-names">Carlos Ajin y Diana Guillén</p>
            </Box>
            <br />
            <br />
            <Box className="arrow-icon-container">
                <img className="arrow-down" src="../assets/arrow-down.png" />
            </Box>
            <br />
            <br />
        </>
    )
}
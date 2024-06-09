import { Box } from "@mui/material";
import "../styles.css";
import arrowDown from "../assets/arrow-down.png";

export default function Header() {

    const headerHeight = {
        height: {
            xs: '400px', 
            sm: '470px', 
            md: '530px'
        }
    }

    return (
        <>
            <Box className="header-container">
                <Box className="main-title" sx={headerHeight}>
                    <p className="our-wedding">Nuestra boda</p>
                    <p className="spouses-names">Carlos Ajin y Diana Guillén</p>
                </Box>
            </Box>
            <br />
            <br />
            <Box className="arrow-icon-container">
                <img className="arrow-down" src={arrowDown} />
            </Box>
            <br />
            <br />
        </>
    )
}
import { Box } from "@mui/material";
import "../styles.css";


const TimeUnit = ({unit, label}) => {
    return(
        <>
            <Box className="time-unit-container">
                <Box className="card-container">
                    {unit}
                </Box>
                <p className="time-unit-label">{label}</p>
            </Box>
        </>
    )
}
export default TimeUnit
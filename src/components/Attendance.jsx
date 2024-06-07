import { Box, Divider, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

const Attendance = (props) => {
    const {guests} = props
    const [isAttending, setIsAttending] = useState(true);

    return(
        <>
            <p className="attendance-title ">CONFIRMAR ASISTENCIA</p>
            <br />
            <p className="attendance-desc">Rogamos tu confirmación antes del 31 de julio.</p>
            <br />
            <br />
            <Divider orientation="horizontal" variant="li" flexItem sx={{marginLeft: 15, marginRight: 15}} />
            <br />
            <Box className="attendance-validity-container">
                <p className="validity-text">VÁLIDO PARA&nbsp;</p>
                <p className="validity-text">{guests}</p>
                <p className="validity-text">&nbsp;INVITADOS</p>
            </Box>
            <br />
            <Divider orientation="horizontal" variant="li" flexItem sx={{marginLeft: 15, marginRight: 15}} />
            <br />
            <br />
            <RadioGroup row defaultValue={isAttending} name="">
                <FormControlLabel value="true" control={<Radio style={{color: "#8c9c6d"}}/>} label="¡Sí, allí estaré!" />
                <FormControlLabel value="false" control={<Radio style={{color: "#8c9c6d"}}/>} label="No podré asistir" />
            </RadioGroup>
            <br />
            <br />
        </>
    )
}
export default Attendance;
import { 
    Box, 
    Divider, 
    Radio, 
    TextField, 
    MenuItem, 
    Select, 
    InputLabel, 
    FormControl,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from "@mui/material";
import { useState } from "react";

const Attendance = (props) => {
    const {guests} = props

    const [formData, setFormData] = useState({
        name: "",
        attendeesQuantity: "",
        message: ""
    }) 

    const [errorMessage, setErrorMessage] = useState('');
    const [openErrorDialog, setOpenErrorDialog] = useState(false)

    const handleOpenErrorDialog = () => {
        setOpenErrorDialog(true);
    }

    const handleCloseErrorDialog = () => {
        setOpenErrorDialog(false)
    }

    const emptyFields = () => {
        setFormData({
            name: "",
            attendeesQuantity: "",
            message: ""
        })
    }

    const handleUserInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const textFieldWidth = {
        width: {
            xs: '90%', 
            sm: '80%', 
            md: '40%'
        }
    }

    const buttonStyle = { 
        backgroundColor: "#8c9c6d",
        borderRadius: 5,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "nexaextralight"
    }

    const getGuestsQuantityList = guests => {
        let numberList = []
        for (let i = 1; i <= guests; i++) {
            numberList.push(i.toString());
        }
        return numberList;
    }

    const guestList = getGuestsQuantityList(guests)

    const sendAttendance = () => {
        console.log("todo piola kek")
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const isValid = validateForm()

        if (isValid) {
            sendAttendance();
            
        } else {
            handleOpenErrorDialog();
        }
    }

    const validateForm = () => {
        const { name, attendeesQuantity } = formData;
        const trimmedName = name.trim();
        const trimmedAttendeesQuantity = attendeesQuantity.trim();

        if (!trimmedName && !trimmedAttendeesQuantity) {
            setErrorMessage('Debe ingresar su nombre y la cantidad de asistentes.');
            return false;
        }
        
        if (!trimmedName) {
            setErrorMessage('Debe ingresar su nombre y apellido');
            return false;
        }
        
        if (!trimmedAttendeesQuantity) {
            setErrorMessage('Debe ingresar la cantidad de asistentes.');
            return false;
        }

        setErrorMessage('');
        return true;
    }

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

            {/* Form container*/}
            <Box 
                className="attendance-form-container" 
                component="form"
                autoComplete="off"
                onSubmit={handleFormSubmission}
                sx={textFieldWidth}
            >
                {/* Name */}
                <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    label="Nombre y apellido"
                    variant="outlined" 
                    color="success"
                    name="name"
                    onChange={handleUserInputChange}
                    value={formData.name}
                    sx={{ background: 'white' }}
                />
                <br />
                {/* Attendees quantity */}
                <FormControl fullWidth>
                    <InputLabel id="attendees-quantity-label" color="success">Cantidad de asistentes</InputLabel>
                    <Select
                        fullWidth
                        labelId="attendees-quantity-label"
                        id="attendees-quantity"
                        color="success"
                        label="Cantidad de asistentes"
                        name="attendeesQuantity"
                        onChange={handleUserInputChange}
                        value={formData.attendeesQuantity}
                        sx={{ background: 'white'}}>
                        {guestList.map((number) => 
                            <MenuItem key={number} value={number}>
                                {number}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br />
                {/* Message */}
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Escribe tu mensaje"
                    multiline
                    rows={4}
                    color="success"
                    name="message"
                    onChange={handleUserInputChange}
                    value={formData.message}
                    sx={{ background: 'white' }}
                />
                <br />
                {/* Button */}
                <Button 
                variant="contained"
                type="submit"
                style={buttonStyle}>
                ENVIAR RESPUESTA
            </Button>
            </Box>
            <Dialog
                open={openErrorDialog}
                onClose={handleCloseErrorDialog}
            >
                <DialogTitle>Alerta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {errorMessage}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleCloseErrorDialog}>Aceptar</Button>
                    </DialogActions>
                </DialogContent>
            </ Dialog>
        </>
    )
}
export default Attendance;
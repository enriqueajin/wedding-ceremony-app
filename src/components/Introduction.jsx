import { Box } from "@mui/material";


export default function Introduction() {

    const textMargin = {
        width: {
            xs: '85%', 
            sm: '85%', 
            md: '30%'
        }
    }

    return (
        <>
            <p className="introduction-title">¡Están invitados!</p>
            <br />
            <Box sx={textMargin}>
                <p className="introduction-desc">Tú has sido parte de muchos buenos momentos y nos encantaría compartir esta bendición tan especial con nuestra familia y amigos.</p>
                <br />
                <p className="introduction-desc introduction-verse">"Mejor son dos que uno, porque obtienen más fruto de su esfuerzo. Si caen, el uno levanta al otro... Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!"</p>
                <br />
                <p className="introduction-desc introduction-verse">Eclesiastés 4:9</p>
            </Box>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
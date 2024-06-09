import { Box, Grid } from "@mui/material";
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import mainPhoto from "../assets/mainphoto.jpg"

export default function PhotoGallery() {

    const photoStyle = {
        width: '100%', 
        objectFit: 'cover', 
        borderRadius: 8
    }
    const photoHeight = {
        height: {
            xs: '320px', 
            sm: '500px', 
            md: '600px'
        }
    }
    const gridContainerAttr ={
        width: {
            xs: '100%', 
            sm: '100%', 
            md: '60%'
        },
        padding: 2
    }

    return (
        <>
            <Grid container sx={gridContainerAttr} rowSpacing={1} columnSpacing={1}>
                {/* First row */}
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src={photo1} 
                        alt="Photo 1" 
                        style={photoStyle} 
                        sx={photoHeight} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src={photo4}
                        alt="Photo 4" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>

                {/* Main photo */}
                <Grid item xs={12}>
                    <Box 
                        component="img" 
                        src={mainPhoto}
                        alt="Main Photo" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>

                {/* Third row */}
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src={photo3}
                        alt="Photo 3" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src={photo2}
                        alt="Photo 2" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
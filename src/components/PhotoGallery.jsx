import { Box, Grid } from "@mui/material";

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
            md: '80%'
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
                        src="../assets/photo1.jpg" 
                        alt="Photo 1" 
                        style={photoStyle} 
                        sx={photoHeight} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src="../assets/photo4.jpg" 
                        alt="Photo 4" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>

                {/* Main photo */}
                <Grid item xs={12}>
                    <Box 
                        component="img" 
                        src="../assets/mainphoto.jpg" 
                        alt="Main Photo" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>

                {/* Third row */}
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src="../assets/photo3.jpg" 
                        alt="Photo 3" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box 
                        component="img" 
                        src="../assets/photo2.jpg"
                        alt="Photo 2" 
                        style={photoStyle} 
                        sx={photoHeight}
                    />
                </Grid>
            </Grid>
        </>
    )
}
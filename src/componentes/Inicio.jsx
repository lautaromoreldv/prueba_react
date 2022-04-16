import React from 'react'
import { Container, Typography } from '@mui/material';
import banner from '../img/banner.jpg';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';

const Inicio = () => {
    return (
        <>
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h1" color="primary" align="center">
                    Huellas
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur repellendus corporis tempora debitis cupiditate architecto corrupti ullam quae nemo at esse, a adipisci, maxime expedita placeat nulla perspiciatis magni.
                </Typography>
            </ThemeProvider>
        </Container>
            <img src={banner} alt="Banner mascota" style={{ width: "100%", height: "auto" }} />
        <Container>

        </Container>
        </>
    )
}

export default Inicio
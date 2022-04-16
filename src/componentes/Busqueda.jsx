import React from "react"
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';

const Busqueda = () => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" color="primary">
                    Busqueda
                </Typography>
            </ThemeProvider>
        </Container>
    )
}

export default Busqueda
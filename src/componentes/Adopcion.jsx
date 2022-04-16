import React from 'react'
import { Container, Typography } from '@mui/material';
import GrillaCards from './GrillaCards';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';

const Adopcion = () => {
    
    return (
        <>
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" color="primary">
                    Adopción
                </Typography>
            </ThemeProvider>
            <GrillaCards></GrillaCards>
        </Container>
        </>
    )
}

export default Adopcion
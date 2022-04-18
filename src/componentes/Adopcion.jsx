import React from 'react'
import GrillaCardsAdopcion from './GrillaCardsAdopcion';
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/adopcion.module.css'

const Adopcion = () => {
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" color="primary" id={styles.adopcion} >
                    Adopción
                </Typography>
            </ThemeProvider>
            <GrillaCardsAdopcion />
        </Container>
    )
}

export default Adopcion
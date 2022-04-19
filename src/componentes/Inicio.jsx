import React from 'react'
import { Container, Typography } from '@mui/material';
import banner from '../img/banner.jpg';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/inicio.module.css'
import GrillaCardsInicio from './GrillaCardsInicio'

const Inicio = () => {
    return (
    <>
        <Container>
            <ThemeProvider theme={theme}>
                <Typography variant="h1" color="primary" align="center">
                    Huellas
                </Typography>
                <Typography variant="body1" style={{ color:"#3C4858" }} id={styles.parrafo1}>
                    Huellas es una aplicación en busqueda del bienestar de las mascotas y especialmente dedicada a que tengan una familia que los pueda cuidar con todo el cariño y dedicación que se merecen.
                </Typography>
            </ThemeProvider>
        </Container>
            <img src={banner} alt="Banner mascota" style={{ width: "100%", height: "auto" }}  />    
        <Container>
            <GrillaCardsInicio />
        </Container>
    </>
    )
}

export default Inicio
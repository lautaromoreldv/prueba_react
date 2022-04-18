import React from "react"
import GrillaCardsBusqueda from "./GrillaCardsBusqueda";
import FiltrarBusqueda from './FiltrarBusqueda'
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/busqueda.module.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Busqueda = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} id={styles.box2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} > 
                        <ThemeProvider theme={theme}>
                            <Typography variant="h2" color="primary" id={styles.busqueda} >
                                Busqueda
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={12} sm={6} id={styles.filtro}>
                        <FiltrarBusqueda />
                    </Grid>
                </Grid>
            </Box>
            <GrillaCardsBusqueda />
        </Container>
    )
}

export default Busqueda
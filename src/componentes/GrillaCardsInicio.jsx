import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsInicio from './CardsInicio'
import styles from '../css/inicio.module.css'
import datos from './DatosInicio'

export default function GrillaCardsInicio() {
  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsInicio}>
      <Grid container spacing={2}>
        {datos.map((dato) => (
          <Grid item key={dato.id} xs={12} sm={6} md={4}>
                  <CardsInicio title={dato.title} image={dato.image} descripcion={dato.descripcion}  />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

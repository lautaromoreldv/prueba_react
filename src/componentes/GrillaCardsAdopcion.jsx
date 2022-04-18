import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsAdopcion from './CardsAdopcion'
import datos from '../api/datos.json'
import styles from '../css/adopcion.module.css'

export default function GrillaCardsAdopcion() {
  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsAdopcion}>
      <Grid container spacing={2}>
        {datos.map((dato, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
              <CardsAdopcion title={dato.title} height={dato.height} image={dato.image} descripcion={dato.descripcion} />
          </Grid>
          ))}
      </Grid>
    </Box>
  );
}


            
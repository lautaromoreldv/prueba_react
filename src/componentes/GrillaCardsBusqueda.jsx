import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsBusqueda from './CardsBusqueda'
import datos from '../api/busqueda.json'
import styles from '../css/busqueda.module.css'

export default function GrillaCardsBusqueda() {
  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsBusqueda}>
      <Grid container spacing={2}>
        {datos.map((dato) => (
          <Grid item key={dato.id} xs={12} sm={6} md={4}>
              <CardsBusqueda id={dato.id} title={dato.title} image={dato.image} descripcion={dato.descripcion} />
          </Grid>
          ))}
      </Grid>
    </Box>
  );
}
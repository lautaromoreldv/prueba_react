import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsInicio from './CardsInicio'
import styles from '../css/inicio.module.css'
import adopcion from '../img/adopcion.png'
import busqueda from '../img/busqueda.png'
import seguridad from '../img/seguridad.png'


export default function GrillaCardsInicio() {
  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsInicio}>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
              <CardsInicio title="Adopción" image={adopcion} descripcion="Para adoptar algún animal se tendrá que llenar un formulario y se pondrá en contacto con esa persona que quiera adoptar a la mascota." />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <CardsInicio title="Busqueda" image={busqueda} descripcion="Contamos con una sección de busqueda de mascotas perdidas según la zona, se podrá contactar con la persona que lo encontró." />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <CardsInicio title="Seguridad" image={seguridad} descripcion="Nos aseguramos a través de varios datos de la persona que se trate de una persona idónea para el cuidado de la mascota" />
          </Grid>
      </Grid>
    </Box>
  );
}


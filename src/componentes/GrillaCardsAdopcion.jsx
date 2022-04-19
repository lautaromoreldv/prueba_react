import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsAdopcion from './CardsAdopcion'
import styles from '../css/adopcion.module.css'
import datos from '../api/adopcion'

const GrillaCardsAdopcion = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(datos)
        .then(() => {
          setData(datos)
        })
}, [])

  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsAdopcion}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
              <CardsAdopcion title={item.title} image={item.image} descripcion={item.descripcion} />
          </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default GrillaCardsAdopcion;
            
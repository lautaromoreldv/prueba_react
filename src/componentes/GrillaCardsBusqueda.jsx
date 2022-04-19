import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardsBusqueda from './CardsBusqueda'
import styles from '../css/busqueda.module.css'
import datos from '../api/busqueda'

const GrillaCardsBusqueda = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(datos)
        .then(() => {
          setData(datos)
        })
}, [])

  return (
    <Box sx={{ flexGrow: 1 }} id={styles.grillaCardsBusqueda}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
              <CardsBusqueda title={item.title} item={item.image} descripcion={item.descripcion} />
          </Grid>
          ))}
      </Grid>
    </Box>
  );
}
export default GrillaCardsBusqueda;
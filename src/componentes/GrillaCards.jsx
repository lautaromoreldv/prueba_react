import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cards from './Cards'
import datos from '../api/datos.json'

export default function GrillaCards() {
  return (
    <Box sx={{ flexGrow: 1 }} id="grillaCards" >
      <Grid container spacing={2}>
        {datos.map((dato, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
              <Cards title={dato.title} height={dato.height} image={dato.image} descripcion={dato.descripcion} />
          </Grid>
          ))}
      </Grid>
    </Box>
  );
}


            
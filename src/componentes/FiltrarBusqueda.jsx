import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import datos from '../api/busqueda.json'
import styles from '../css/busqueda.module.css'

export default function FiltrarBusqueda() {
  const options = datos.map((dato) => {
    const firstLetter = dato.categoria[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...dato,
    };
  });

  return (
      <Autocomplete
        id={styles.filtroBusqueda}
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(dato) => dato.firstLetter}
        getOptionLabel={(dato) => dato.categoria[0].toUpperCase() + dato.categoria.slice(1)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Filtrar por mascota" />}
      />
  );
}

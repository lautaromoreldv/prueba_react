import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import datos from '../api/busqueda'
import styles from '../css/busqueda.module.css'

export default function FiltrarBusqueda() {
  const options = datos.map((dato) => {
    const firstLetter = dato.title[0].toUpperCase();
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
        getOptionLabel={(dato) => dato.title[0].toUpperCase() + dato.title.slice(1)}
        noOptionsText={'No hay mascotas con ese nombre'}
        renderInput={(params) => <TextField {...params} label="Buscar por nombre" />}
      />
  );
}

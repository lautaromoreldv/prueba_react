import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Navegacion() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ pb: 7 }} >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels value={value} onChange={handleChange}>

                <BottomNavigationAction component={Link} to="/inicio"   value="inicio"   label="Inicio"   icon={<HomeIcon />} />  
                <BottomNavigationAction component={Link} to="/adopcion" value="adopcion" label="Adopción" icon={<PetsIcon />} />
                <BottomNavigationAction component={Link} to="/busqueda" value="busqueda" label="Busqueda" icon={<PersonSearchIcon />} />
                <BottomNavigationAction component={Link} to="/contacto" value="contacto" label="Contacto" icon={<ContactPageIcon />} />

            </BottomNavigation>
        </Paper>
    </Box>
  );
}
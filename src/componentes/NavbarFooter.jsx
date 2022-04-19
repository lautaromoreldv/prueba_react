import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

const NavbarFooter = () => {

  return (
    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ width: '100', height: '100px', backgroundColor: '#3C4858' }}>
        <Container>
            <Typography variant="body1" color="#fff" align="center">
                © Huellas todos los derechos reservados 2022
            </Typography>
        </Container>
    </Box>
  );
}

export default NavbarFooter;
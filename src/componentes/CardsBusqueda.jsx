import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/busqueda.module.css'

export default function Cards(props) {
  return (
      <Card sx={{ maxWidth: 1 }} >
        <CardMedia
          id={props.id}
          component='img'
          title={props.title}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descripcion}
          </Typography>
        </CardContent>
        <CardActions>
            <ThemeProvider theme={theme}>
            <Button variant="outlined" size="large" fullWidth id={styles.botonContactarme} >
                Contactarme
                </Button>
            </ThemeProvider>
        </CardActions>
      </Card>
  );
}

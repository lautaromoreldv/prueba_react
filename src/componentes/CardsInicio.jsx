import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../css/inicio.module.css'

export default function CardsInicio(props) {
  return (
      <Card sx={{ maxWidth: 1 }} >
        <CardMedia 
          id={styles.imagenIcono}
          component='img'
          title={props.title}
          image={props.image}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.title}
          </Typography>
          <Typography variant="body2" style={{ color:"#3C4858" }}>
            {props.descripcion}
          </Typography>
        </CardContent>
      </Card>
  );
}

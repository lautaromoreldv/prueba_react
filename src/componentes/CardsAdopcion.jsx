import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/adopcion.module.css'

export default function CardsAdopcion(props) {
  return (
      <Card sx={{ maxWidth: 1 }} >
        <CardMedia
          component='img'
          title={props.title}
          height={props.height}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.title}
          </Typography>
          <Typography variant="body2" style={{ color:"#3C4858" }}>
            {props.descripcion}
          </Typography>
          <Typography variant="body1" style={{ color:"#3C4858" }} id={styles.zona} >
            Lugar: {props.zona}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1} md={1} >
            </Grid>
            <Grid item xs={8} sm={8} md={8} >
              <ThemeProvider theme={theme}>
                <Button variant="outlined" size="large" fullWidth id={styles.botonAdoptar} >
                    Adoptar
                  </Button>
                </ThemeProvider>
            </Grid>
            <Grid item xs={1} sm={2} md={1} >
              <ThemeProvider theme={theme}>
                <Fab color="secondary" size="small" aria-label="like" id={styles.like} >
                    <FavoriteIcon  />
                  </Fab>
                </ThemeProvider>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
  );
}

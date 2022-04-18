import React , { useState } from 'react'
import { useForm } from 'react-hook-form'
import Enviado from './Enviado'
import { FormControl, InputLabel, Input, Grid, Box, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import styles from '../css/contacto.module.css'

const Formulario = () => {
    
    const[enviar, setEnviar] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        setEnviar(true);
    } 

  return (
    <>
        <ThemeProvider theme={theme}>
            <Typography variant="h2" mb={4} color="primary">
                Contacto
            </Typography>
            
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} lg={4} xl={6}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                                    <Input
                                    {...register("nombre", { required: 'El nombre es obligatorio.', minLength: {
                                        value: 2,
                                        message: 'Tiene que tener 2 caracteres como mínimo'},
                                        pattern: {
                                            value: /^[A-Z]+$/i,
                                            message: 'No puede contener números'
                                        }
                                    })} 
                                    type="text" className="form-control" placeholder="Ingresar nombre" />
                                    <Typography variant="body1" color="secondary">{errors.nombre?.message}</Typography>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={6}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="apellido">Apellido</InputLabel>
                                    <Input 
                                    {...register("apellido", { required: 'El apellido es obligatorio.', minLength: {
                                        value: 2,
                                        message: 'Tiene que tener 2 caracteres como mínimo'}, 
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: 'No puede contener números'
                                        }
                                    })} 
                                    type="text" className="form-control" placeholder="Ingresar apellido" />
                                    <Typography variant="body1" color="secondary">{errors.apellido?.message}</Typography>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={5}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="edad">Edad</InputLabel>
                                    <Input 
                                    {...register("edad", { required: 'La edad es obligatorio.', 
                                    min:{
                                        value: 0,
                                        message: 'La edad mínima es 0 años'},
                                    max: {
                                        value: 120,
                                        message: 'La edad máxima es 120 años'}
                                    })} 
                                    type="number" className="form-control" placeholder="Ingresar edad" />
                                    <Typography variant="body1" color="secondary">{errors.edad?.message}</Typography>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={8} xl={7}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="celular">Teléfono</InputLabel>
                                    <Input 
                                    {...register("celular", { required: 'El teléfono es obligatorio.', 
                                    min: {
                                        value: 0,
                                        message: 'No puede ser un número menor a 0'
                                        },
                                    minLength: {
                                        value: 10,
                                        message: 'Tiene que tener 10 números como mínimo'
                                        },
                                    maxLength:{
                                        value: 12,
                                        message: 'Tiene que tener 12 números como máximo'
                                    }
                                    })} 
                                    type="number" className="form-control" placeholder="Ingresar celular" />
                                    <Typography variant="body1" color="secondary">{errors.celular?.message}</Typography>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={8} xl={7}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="direccion">Dirección</InputLabel>
                                    <Input 
                                    {...register("direccion", { required: 'La dirección es obligatoria.', minLength: {
                                        value: 2,
                                        message: 'Tiene que tener 2 caracteres como mínimo'}, 
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: 'No puede contener números'
                                        }
                                    })} 
                                    type="text" className="form-control" placeholder="Ingresar direccion" />
                                    <Typography variant="body1" color="secondary">{errors.direccion?.message}</Typography>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} xl={5}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="numero">Altura (cm)</InputLabel>
                                    <Input 
                                    {...register("numero", { required: 'El número de la altura es obligatorio.', 
                                    min:{
                                        value: 1,
                                        message: 'La altura mínima es 1'},
                                    max: {
                                        value: 27500,
                                        message: 'La altura máxima es 27500'}
                                    })} 
                                    type="number" className="form-control" placeholder="Ingresar altura" />
                                    <Typography variant="body1" color="secondary">{errors.numero?.message}</Typography>
                                </FormControl>
                        </Grid>
                    </Grid>

                    <Button color="primary" fullWidth variant="outlined" type="submit" id={styles.enviarForm}>
                        Enviar
                    </Button>

                </Box>
            </form>
            {enviar && <Enviado />}
        </ThemeProvider>
    </>
  )
}

export default Formulario
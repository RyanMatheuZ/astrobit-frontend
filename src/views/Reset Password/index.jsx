import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Paper, TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Logo from '../../components/Elements/Logo'
import axios from 'axios';

const Reset = () => {
  const paperStyle = { padding: 15, height: 'auto', width: 'auto', margin: "50px auto", fontFamily: 'Montserrat' }
  const btnstyle = { margin: '8px 0', bgcolor: 'primaryColor' }
  const boxgrid = { width: 400, fontFamily: 'Montserrat', margin: 'auto' }
  const textfild1 = { width: '95%' }

  const validationSchema = yup.object({
    fullName: yup
    .string('Digite seu usuário')
    .required('O usuário é obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post ('https://localhost:5001/api/Authenticate/reset-password-token',
      {
        username : values.fullName,
        
      }
      ).then( response => console.log(response)).catch(function(error,textError){
        console.log(textError)
      })
    }
  });

  return (

    <Box style={boxgrid}sx={{bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default'}}>
      <Paper elevation={10} style={paperStyle} align='center' >
        <Grid align='center' >
              <Logo/>
              <Typography margin="dense" sx={{ marginBlock:2,fontWeight:700, fontSize:25, color:"#8979F2"}}>Recuperar senha</Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField 
          style={textfild1} 
          id="fullName" 
          name="fullName" 
          label="Usuário" 
          placeholder="Digite seu usuario" 
          value={formik.values.fullName} 
          onChange={formik.handleChange} 
          error={formik.touched.fullName && 
          Boolean(formik.errors.fullName)} 
          helperText={formik.touched.fullName && 
          formik.errors.fullName} 
          margin="dense"
          />
          <Button type='submit' color='primary' variant='contained' style={btnstyle} sx={{ width: '95%' }} >Entrar</Button>
        </form>
        <Typography >
          <Link to="/login" >
            Fazer login?
          </Link>
        </Typography>
        <Typography> Ainda não possui conta?
          <Link to="/register">
            Cadastre-se?
          </Link>
        </Typography>
      </Paper>

    </Box>
  )
}
export default Reset

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Paper, Avatar, TextField, Stack, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Register = () => {
  const paperStyle = { padding: 15, height: 'auto', width: 'auto', margin: "50px auto", fontFamily: 'Montserrat' }
  const avatarStyle = { backgroundColor: '#8979F2' }
  const btnstyle = { margin: '8px 0', backgroundColor: '#8979F2' }
  const boxgrid = { width: 400, fontFamily: 'Montserrat', margin: 'auto' }
  const textfild1 = { width: '95%' }

  const validationSchema = yup.object({
    fullName: yup
      .string('Digite seu nome')
      .required('o nome é obrigatório'),
    email: yup
      .string('Digite seu e-mail')
      .email('Digite um e-mail valido')
      .required('o e-mail é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .min(5, 'A senha deve ter no mínimo 5 caracteres')
      // eslint-disable-next-line no-useless-concat
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'A senha precisa ter no mínimo 5 caracteres, ' + 'uma letra maiúscula e uma letra minúscula, ' + 'um número e um caracter especial')
      .required('Senha é obrigatória'),
    passwordConfirm: yup.string()
      .label('Confirme sua senha')
      .required('Confirme sua senha')
      .oneOf([yup.ref('password')], 'Senhas não correspondem'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    }
  });

  return (

    <Box style={boxgrid}>
      <Paper elevation={10} style={paperStyle} align='center' >
        <Grid align='center' >
          <Avatar style={avatarStyle}><Stack><AddIcon /></Stack></Avatar>
          <h2 margin="dense">Cadastre-se</h2>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <TextField style={textfild1} id="fullName" name="fullName" label="Nome" placeholder="Digite seu nome" value={formik.values.fullName} onChange={formik.handleChange} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} margin="dense" />
          <TextField style={textfild1} id="email" name="email" label="E-mail" placeholder="Digite seu e-mail" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} margin="dense" />
          <TextField style={textfild1} id="password" name="password" label="Senha" placeholder='Digite sua senha' type="password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} margin="dense" />
          <TextField style={textfild1} id="passwordConfirm" name="passwordConfirm" label="Confirme a senha" placeholder='Confirme sua senha' type="password" value={formik.values.passwordConfirm} onChange={formik.handleChange} error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)} helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm} margin="dense" />

          <Button type='submit' color='primary' variant='contained' style={btnstyle} sx={{ width: '95%' }} >Cadastre-se</Button>
        </form>
        <Typography> Já possui conta?
          <Link to="/Login">
            Entrar
          </Link>
        </Typography>
      </Paper>

    </Box>
  )
}
export default Register

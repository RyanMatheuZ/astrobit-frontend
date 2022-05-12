import React from 'react'
import { Link } from 'react-router-dom'

import * as yup from 'yup'
import { useFormik } from 'formik'

import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'

import { Box, Paper, Grid, TextField, Button, Typography } from '@mui/material'

import Logo from '../../components/Elements/Logo'

import textFields from './TextFields'

import 'react-toastify/dist/ReactToastify.min.css'

const Register = () => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/

  const validationSchema = yup.object({
    name: yup
      .string('Digite seu nome')
      .required('o nome é obrigatório'),
    email: yup
      .string('Digite seu e-mail')
      .email('Digite um e-mail valido')
      .required('o e-mail é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .min(5, 'A senha deve ter no mínimo 5 caracteres')
      .matches(passwordRegex, 'A senha precisa ter no mínimo 5 caracteres,\n uma letra maiúscula e uma letra minúscula,\n um número e um caracter especial')
      .required('Senha é obrigatória'),
    passwordConfirm: yup.string()
      .label('Confirme sua senha')
      .required('Confirme sua senha')
      .oneOf([yup.ref('password')], 'Senhas não correspondem')
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post('https://localhost:5001/api/Authenticate/register', {
        name: values.name,
        email: values.email,
        password: values.password
      })
        .then(response => {
          console.log(response.data)
          toast.success('Usuário cadastrado com sucesso!')
          resetForm()
        }).catch(error => {
          console.log(error)
          toast.error('Usuário já existente!')
          resetForm()
        })
    }
  })

  return (
    <Box sx={{ bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', maxWidth: '400px', margin: '0 auto', fontFamily: 'Montserrat' }}>
      <Paper
        elevation={10}
        align='center'
        style={{ padding: 15, height: 'auto', width: 'auto', margin: "50px auto", fontFamily: 'Montserrat' }}
      >
        <Grid align='center' >
          <Logo />
          <Typography
            sx={{ color: 'primaryColor', marginBlock: 2, fontWeight: 700, fontSize: 25 }}
            margin="dense"
          >
            Cadastre-se
          </Typography>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          {textFields.map((textField, i) => (
            <TextField
              key={i}
              id={textField.name}
              name={textField.name}
              label={textField.label}
              placeholder={textField.label}
              value={formik.values?.[textField.name]}
              error={formik.touched?.[textField.name] && Boolean(formik.errors?.[textField.name])}
              helperText={formik.touched?.[textField.name] && formik.errors?.[textField.name]}
              onChange={formik.handleChange}
              margin="dense"
              sx={{ width: '95%' }}
            />
          ))}
          <Button
            type='submit'
            color='primary'
            variant='contained'
            sx={{ width: '95%', marginTop: 3, bgcolor: 'primaryColor' }}
          >
            Cadastre-se
          </Button>
        </form>
        <Box sx={{ marginTop: 2 }}>
          <Typography>
            Já possui conta?
          </Typography>
          <Link to="/login">
            <Typography sx={{ color: 'primaryColor', fontWeight: 500 }}>
              Entrar
            </Typography>
          </Link>
        </Box>
      </Paper>
      <ToastContainer />
    </Box>
  )
}

export default Register

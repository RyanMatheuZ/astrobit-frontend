import React from 'react'
import { Link } from 'react-router-dom'

import * as yup from 'yup'
import { useFormik } from 'formik'

import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'

import { Box, Paper, TextField, Button, Typography } from '@mui/material'

import Logo from '../../components/Elements/Logo'

import textFields from './TextFields'

import 'react-toastify/dist/ReactToastify.min.css'

const Login = () => {
  const validationSchema = yup.object({
    login: yup
      .string('Digite seu usuário')
      .required('O usuário é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .required('Senha é obrigatória'),
  })

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post('https://localhost:5001/api/Authenticate/login', {
        login: values.name,
        password: values.password
      })
        .then(response => {
          console.log(response)
          toast.success('Usuário logado com sucesso!')
          resetForm()
        })
        .catch(error => {
          console.log(`Error: ${error}`)
          toast.error('Usuário ou senha inválida')
          resetForm()
        })
    }
  })

  return (
    <Box sx={{
      bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px',
      borderBottomLeftRadius: '10px', boxShadow: 6, cursor: 'default', margin: '0 auto', maxWidth: '400px',
      fontFamily: 'Montserrat'
    }}
    >
      <Paper
        elevation={10}
        align='center'
        style={{ padding: 15, height: 'auto', width: 'auto', margin: '50px auto', fontFamily: 'Montserrat' }}
      >
        <Box>
          <Logo />
          <Typography
            margin="dense"
            sx={{ color: 'primaryColor', marginBlock: 2, fontWeight: 700, fontSize: 25 }}
          >
            Entrar
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          {textFields.map((textField, i) => (
            <TextField
              key={i}
              id={textField.name}
              name={textField.name}
              label={textField.label}
              placeholder={textField.label}
              type={textField.type}
              value={formik.values?.[textField.name]}
              error={formik.touched?.[textField.name] && Boolean(formik.errors?.[textField.name])}
              helperText={formik.touched?.[textField.name] && formik.errors?.[textField.name]}
              onChange={formik.handleChange}
              margin="dense"
              sx={{ width: '95%' }}
            />
          ))}
          <Button
            sx={{ bgcolor: 'primaryColor', width: '95%', marginTop: 3 }}
            type='submit'
            color='primary'
            variant='contained'
          >
            Entrar
          </Button>
          <ToastContainer />
        </form>
        <Box sx={{ marginTop: 2 }}>
          <Typography>
            Ainda não possui conta?
          </Typography>
          <Link to="/register">
            <Typography sx={{ color: 'primaryColor', fontWeight: 500 }}>
              Cadastre-se
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  )
}

export default Login

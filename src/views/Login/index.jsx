import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Paper, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Logo from '../../components/Elements/Logo'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Login = () => {
  const paperStyle = { padding: 15, height: 'auto', width: 'auto', margin: "50px auto", fontFamily: 'Montserrat'}
  const validationSchema = yup.object({
    fullName: yup
      .string('Digite seu usuário')
      .required('O usuário é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .required('Senha é obrigatória'),
  });
  const formik = useFormik({
    initialValues: {
      fullName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post('https://localhost:5001/api/Authenticate/login',
        {
          username: values.fullName,
          password: values.password
        }
      ).then(response => {
        console.log(response.data)
        toast.success('Usuário logado com sucesso!')
      }).catch(error => {
        console.log(error)
        toast.error('Usuário ou senha inválida')
      })
    },
  })
  return (
    <Box sx={{
      bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px',
      borderBottomLeftRadius: '10px', boxShadow: 6, cursor: 'default', margin: '0 auto', maxWidth: '400px',
      fontFamily: 'Montserrat'
    }}
    >
      <Paper
        style={paperStyle}
        elevation={10}
        align='center'
      >
        <Box>
          <Logo />
          <Typography
            margin="dense"
            sx={{ marginBlock: 2, fontWeight: 700, fontSize: 25, color: "#8979F2" }}
          >
            Entrar
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ width: '95%' }}
            id="fullName"
            name="fullName"
            label="Usuário"
            placeholder="Digite seu usuario"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            margin="dense"
          />
          <TextField
            sx={{ width: '95%' }}
            id="password"
            name="password"
            label="Senha"
            placeholder='Digite sua senha'
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="dense"
          />
          <FormControlLabel sx={{ paddingLeft: 1, float: 'left' }}
            control={
              <Checkbox name="checkedB" color="primary" />
            }
            label="Lembra-me"
          />
          <Button
            sx={{ width: '95%', margin: '8px 0', bgcolor: 'primaryColor' }}
            type='submit'
            color='primary'
            variant='contained'
          >
            Entrar
          </Button>
        </form>
        <Typography >
          <Link to="/reset" >
            Esqueceu a senha?
          </Link>
        </Typography>
        <Typography> Ainda não possui conta?
          <Link to="/register">
            Cadastre-se?
          </Link>
        </Typography>
      </Paper>
      <ToastContainer />
    </Box>
  )
}
export default Login

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import HelmetContainer from '../../components/HelmetContainer';
import ContainerForm from '../../components/Layouts/ContainerForm';
import Logo from '../../components/Elements/Logo';
import textFields from './TextFields';
import 'react-toastify/dist/ReactToastify.min.css';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    login: yup
      .string('Digite seu usuário!')
      .required('Usuário é obrigatório!'),
    password: yup
      .string('Digite sua senha!')
      .required('Senha é obrigatória!'),
  });

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post('https://localhost:5001/api/Usuario/login', {
        login: values.login,
        senha: values.password,
      })
        .then((response) => {
          toast.success('Usuário logado com sucesso!');
          resetForm();

          localStorage.setItem('id', response.data.usuarioId.id);

          setTimeout(() => navigate('/admin', { replace: true }), 1500);
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
          toast.error('Usuário ou senha inválida!');
        });
    },
  });

  return (
    <ContainerForm>
      <HelmetContainer
        title="Entrar"
        description="Entre em sua conta e confira o melhor do mundo tecnológico!"
      />
      <Box sx={{
        bgcolor: 'white',
        borderLeft: 3,
        borderColor: 'tertiaryColor',
        boxShadow: 6,
        cursor: 'default',
        margin: '0 auto',
        maxWidth: '400px',
        fontFamily: 'Montserrat',
      }}
      >
        <Paper
          elevation={10}
          align="center"
          style={{
            padding: 15, height: 'auto', width: 'auto', margin: '50px auto', fontFamily: 'Montserrat',
          }}
        >
          <Box>
            <Logo />
            <Typography
              sx={{
                color: 'primaryColor', marginBlock: 2, fontWeight: 700, fontSize: 25,
              }}
              margin="dense"
            >
              Entrar
            </Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            {textFields.map((textField) => (
              <TextField
                key={textField.label}
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
              type="submit"
              color="primary"
              variant="contained"
            >
              Entrar
            </Button>
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
    </ContainerForm>
  );
};

export default Login;

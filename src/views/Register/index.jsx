import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import {
  Box, Paper, TextField, Button, Typography, Select, FormControl, InputLabel, MenuItem,
} from '@mui/material';
import HelmetContainer from '../../components/HelmetContainer';
import ContainerForm from '../../components/Layouts/ContainerForm';
import Logo from '../../components/Elements/Logo';
import { textFields, perfis } from './TextFields';

import 'react-toastify/dist/ReactToastify.min.css';

const Register = () => {
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;

  const validationSchema = yup.object({
    name: yup
      .string('Digite seu nome')
      .required('O nome é obrigatório'),
    email: yup
      .string('Digite seu e-mail')
      .email('Digite um e-mail valido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string('Digite sua senha')
      .min(5, 'A senha deve ter no mínimo 5 caracteres')
      .matches(passwordRegex, 'A senha precisa ter no mínimo 5 caracteres,\n uma letra maiúscula e uma letra minúscula,\n um número e um caracter especial')
      .required('Senha é obrigatória'),
    passwordConfirm: yup.string()
      .label('Confirme sua senha')
      .required('Confirme sua senha')
      .oneOf([yup.ref('password')], 'Senhas não correspondem'),
    perfilinvestidor: yup
      .string('Selecione seu perfil')
      .required('Selecione seu perfil'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      perfilinvestidor: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post('https://localhost:5001/api/Usuario', {
        nome: values.name,
        login: values.email,
        senha: values.password,
        tipoperfil: values.perfilinvestidor,
      })
        .then((response) => {
          if (response.data.id !== 0) {
            toast.success('Usuário cadastrado com sucesso');
            resetForm();
            localStorage.setItem('id', response.data.id);
            navigate('/login', { replace: true });
          }
          if (response.data.id <= 0) {
            toast.error('Usuario já existente');
          }
        });
    },
  });

  return (
    <ContainerForm>
      <HelmetContainer
        title="Cadastre-se"
        description=""
      />
      <Box sx={{
        bgcolor: 'white',
        borderLeft: 3,
        borderColor: 'tertiaryColor',
        boxShadow: 6,
        cursor: 'default',
        maxWidth: '400px',
        margin: '0 auto',
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
              Cadastre-se
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
                value={formik.values?.[textField.name]}
                type={textField.type}
                error={formik.touched?.[textField.name] && Boolean(formik.errors?.[textField.name])}
                helperText={formik.touched?.[textField.name] && formik.errors?.[textField.name]}
                onChange={formik.handleChange}
                margin="dense"
                sx={{ width: '95%' }}
              />
            ))}
            <FormControl sx={{ width: '95%' }} margin="dense">
              <InputLabel>
                Perfil do investidor
              </InputLabel>
              <Select
                name="perfilinvestidor"
                label="Perfil do investidor"
                error={formik.touched?.[Select.perfilinvestidor] && Boolean(formik.errors?.[Select.perfilinvestidor])}
                helperText={formik.touched?.[Select.perfilinvestidor] && formik.errors?.[Select.perfilinvestidor]}
                onChange={formik.handleChange}
              >
                {perfis.map((currency) => (
                  <MenuItem
                    value={currency.value}
                  >
                    <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                      {currency.value}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              color="primary"
              variant="contained"
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
      </Box>
      <ToastContainer />
    </ContainerForm>
  );
};

export default Register;

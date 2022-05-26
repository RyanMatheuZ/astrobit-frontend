import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import {
  TextField, Button, Typography, Grid, Box,
} from '@mui/material';

import WhiteLogo from '../../components/Elements/WhiteLogo';

import HelmetContainer from '../../components/HelmetContainer';
import LayoutDefault from '../../components/Layouts/LayoutDefault';
import Container from '../../components/Layouts/Container';

import contacts from './Contacts';
import logos from './Logos';
import textFields from './TextFields';

const Contact = () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('O nome é obrigatório!'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório!'),
    phone: yup
      .string()
      .required('O telefone é obrigatório!'),
    doubt: yup
      .string()
      .required('A dúvida é obrigatória!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      doubt: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success('Mensagem enviada com sucesso!');
      resetForm();
    },
  });

  return (
    <LayoutDefault>
      <HelmetContainer
        title="Contato"
        description="Entre em contato e tire suas dúvidas com nossos especialistas!"
      />
      <Container>
        <Grid
          container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            borderLeft: 3,
            borderColor: 'tertiaryColor',
            borderTopRightRadius: '30px',
            borderBottomLeftRadius: '30px',
            boxShadow: 6,
            cursor: 'default',
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'white',
              padding: 3,
              borderBottomLeftRadius: { xs: '0px', md: '30px' },
              borderTopRightRadius: { xs: '30px', md: '0px' },
            }}
          >
            <Typography sx={{
              color: 'primaryColor', marginBlock: 1, fontSize: 25, fontWeight: 700,
            }}
            >
              Contato
            </Typography>
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%',
              }}
            >
              {textFields.map((textField) => (
                <TextField
                  key={textField.label}
                  id={textField.name}
                  name={textField.name}
                  label={textField.label}
                  placeholder={textField.label}
                  value={formik.values?.[textField.name]}
                  error={
                    formik.touched?.[textField.name] && Boolean(formik.errors?.[textField.name])
                  }
                  helperText={formik.touched?.[textField.name] && formik.errors?.[textField.name]}
                  onChange={formik.handleChange}
                  margin="dense"
                  sx={{ width: '80%' }}
                />
              ))}
              <TextField
                id="doubt"
                label="Dúvida"
                multiline
                rows={4}
                value={formik.values.doubt}
                onChange={formik.handleChange}
                error={
                  formik.touched.doubt && Boolean(formik.errors.doubt)
                }
                helperText={formik.touched.doubt && formik.errors.doubt}
                margin="dense"
                sx={{ width: '80%' }}
              />
              <Button
                sx={{ marginTop: 1, width: '40%' }}
                type="submit"
                color="primary"
                variant="contained"
              >
                Enviar
              </Button>
              <ToastContainer />
            </form>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex', flexDirection: 'column', bgcolor: 'primaryColor', borderBottomLeftRadius: { xs: '30px', md: '0px' }, borderTopRightRadius: { xs: '0px', md: '30px' }, alignItems: 'center', padding: 3,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 25, fontWeight: 700, marginTop: 1, marginBottom: 1, color: 'white', textAlign: 'center',
                }}
              >
                Informação para contato
              </Typography>
            </Box>

            <Box sx={{ marginBlock: 3 }}>
              {contacts.map((contact) => (
                <Box
                  key={contact.label}
                  sx={{
                    display: 'flex', marginLeft: 1, color: 'white', fontWeight: 500, marginBottom: 2, fontSize: 15,
                  }}
                >
                  {contact.image}
                  <Typography sx={{ fontSize: 15 }}>
                    {contact.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', marginBottom: 5 }}>
              {logos.map((logo) => (
                <Box
                  key={logo.label}
                  component="figure"
                  sx={{ marginInline: '5px' }}
                >
                  <a href={logo.linkUrl} target="_blank" rel="noopener noreferrer">
                    {logo.image}
                  </a>
                </Box>
              ))}
            </Box>

            <Box sx={{ marginTop: 3, marginLeft: 20 }}>
              <WhiteLogo sx={{ maxWidth: '150' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </LayoutDefault>
  );
};

export default Contact;

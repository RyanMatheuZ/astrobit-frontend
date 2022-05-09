import React from 'react'
import { TextField, Button, Typography, Grid, Box } from '@mui/material'
import HelmetContainer from '../../components/HelmetContainer'
import LayoutDefault from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useFormik } from 'formik'
import * as yup from 'yup'
import WhiteLogo from '../../components/Elements/WhiteLogo'
const styleform = { display: 'flex', alignItems: 'center', flexDirection: 'column', width: '80%' }
const logos = [
  { label: 'Facebook', image: <FacebookIcon sx={{ color: 'secondaryColor' }} />, imageWidth: '125', linkUrl: 'https://facebook.com/', color: '#27F27F' },
  { label: 'Twitter', image: <TwitterIcon sx={{ color: 'secondaryColor' }} />, imageWidth: '125', linkUrl: 'https://twitter.com/' },
  { label: 'Instagram', image: <InstagramIcon sx={{ color: 'secondaryColor' }} />, imageWidth: '75', linkUrl: 'https:/instagram.com' },
]
const Contact = () => {
  const validationSchema = yup.object({
    fullName: yup
      .string('Digite seu usuário')
      .required('O usuário é obrigatório'),
    email: yup
      .string('Digite seu e-mail')
      .email('Digite um e-mail valido')
      .required('O e-mail é obrigatório'),
    duvida: yup
      .string('Digite sua duvida')
      .required('Digite sua duvida')
  })
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      duvida: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    },
  })
  return (
    < LayoutDefault >
      <Container>
        <Grid
          container
          sx={{
            display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '100%', justifyContent: 'space-between',
            borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px',
            boxShadow: 6, cursor: 'default'
          }}
        >
          <Grid
            item xs={12} md={7}
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'white', padding: 3,
              borderBottomLeftRadius: '30px'
            }}
          >
            <Typography
              sx={{ marginTop: 1, marginBottom: 1, color: '#8979F2', fontWeight: 700, fontSize: 25 }}
            >
              Contato
            </Typography>
            <form onSubmit={formik.handleSubmit} style={styleform} >
              <TextField
                sx={{ width: '80%' }}
                id="fullName"
                name="fullName"
                label="Nome"
                placeholder="Nome"
                margin="dense"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
              <TextField
                sx={{ width: '80%' }}
                id="email"
                name="email"
                label="E-mail"
                placeholder="E-mail"
                margin="dense"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{ width: '80%' }}
                id="Telefone"
                name="telefone"
                label="Telefone"
                placeholder="Telefone"
                margin="dense"
              />
              <TextField
                sx={{ width: '80%' }}
                id="duvida"
                label="Duvida"
                placeholder="Duvida"
                multiline
                rows={4}
                defaultValue="DUVIDA"
                margin="dense"
                value={formik.values.duvida}
                onChange={formik.handleChange}
                error={formik.touched.duvida && Boolean(formik.errors.duvida)}
                helperText={formik.touched.duvida && formik.errors.duvida}
              />
              <Button
                sx={{ marginTop: 1, width: '40%' }}
                type='submit'
                color='primary'
                variant='contained'
              >
                Enviar
              </Button>
            </form>
          </Grid>
          <Grid
            item
            xs={12} md={5} sx={{
              display: 'flex', flexDirection: 'column', bgcolor: 'primaryColor',
              borderTopRightRadius: '30px', alignItems: 'center', padding: 3
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 25, fontWeight: 700, marginTop: 1, marginBottom: 1, color: 'white', textAlign: 'center'
                }}
              >
                Informação para contato
              </Typography>
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <Box sx={{ display: 'flex', marginLeft: 1, color: 'white', fontWeight: 500, marginBottom: 2, fontSize: 15 }}>
                <PhoneEnabledIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
                <Typography sx={{ fontSize: 15 }}>(16)99999-0111</Typography>
              </Box>
              <Box sx={{ display: 'flex', marginLeft: 1, color: 'white', fontWeight: 500, marginBottom: 2, fontSize: 15 }}>
                <EmailIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
                <Typography>astro@bit.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', marginLeft: 1, color: 'white', fontWeight: 500, marginBottom: 5, fontSize: 15 }}>
                <LanguageIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
                <Typography>astrobit.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', marginBottom: 5 }}>
              {logos.map((logo, i) => (
                <Box
                  key={i}
                  component="figure"
                  sx={[{ marginInline: { xs: 2, md: 3 } }, { marginBlock: 1 }]}
                >
                  <a
                    href={logo.linkUrl} target="_blank" rel="noopener noreferrer"
                  >
                    {logo.image}
                  </a>
                </Box>
              ))}
            </Box>
            <Box sx={{ marginTop: 3, marginLeft:30}}>
              <WhiteLogo />
            </Box>
          </Grid>
        </Grid>
      </Container >
    </LayoutDefault >
  )
}
export default Contact

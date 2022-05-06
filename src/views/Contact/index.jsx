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
const Contact = () =>
  <LayoutDefault>
    <HelmetContainer
      title="Contato"
      description="Restou alguma dúvida? Mande uma mensagem aos nossos especialistas!"
    />
    <Container>
      <Grid container sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '30px', borderBottomLeftRadius: '30px', boxShadow: 6, cursor: 'default' }}>
        <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'white', padding: 3, borderBottomLeftRadius: '30px' }}>
          <Typography sx={{ marginTop: 1, marginBottom: 1, color: '#8979F2', fontWeight: 700, fontSize: 25 }}>Contato</Typography>
          <TextField
            sx={{ width: '70%', margin: 'auto' }}
            id="fullName"
            name="fullName"
            label="Digite seu nome"
            placeholder="Digite seu nome"
            margin="dense"
          />
          <TextField
            sx={{ width: '70%' }}
            id="email"
            name="email"
            label="Digite seu e-mail"
            placeholder="Digite seu e-mail"
            margin="dense"
          />
          <TextField
            sx={{ width: '70%' }}
            id="telefone"
            name="telefone"
            label="Digite seu telefone"
            placeholder="telefone"
            margin="dense"
          />
          <TextField
            sx={{ width: '70%' }}
            id="outlined-multiline-static"
            label="Duvida"
            placeholder="Digite sua duvida"
            multiline
            rows={4}
            margin="dense"
          />
          <Button
            sx={{ marginTop: 1, width: '40%' }}
            type='submit'
            color='primary'
            variant='contained'
          >
            Enviar
          </Button>

        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'primaryColor', borderTopRightRadius: '30px', alignItems: 'center', padding: 3 }}>
          <Box>
            <Typography sx={{ fontSize: 25, fontWeight: 700, marginTop: 1, marginBottom: 1, color: 'white', textAlign: 'center' }} >Informação para contato</Typography>
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
            <FacebookIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
            <TwitterIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
            <InstagramIcon sx={{ color: '#27F27F', marginRight: '15px' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </LayoutDefault>

export default Contact

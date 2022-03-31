import React from 'react'
import {
    Stack,
    TextField
}    from '@mui/material'

import Container from '../../components/Layouts/Container'


const Register = () =>
    <Container>
        <Stack
            component="form"
            sx={{
                width: '25ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <TextField id="name" label="Nome" variant="outlined" margin="dense" />
            <TextField id="cpf" label="CPF" variant="outlined" margin="dense" />
            <TextField id="e-mail" label="E-mail" variant="outlined" margin="dense" />
            <TextField id="password" label="Senha" variant="outlined" margin="dense" />
            <TextField id="cpassword" label="Confirme sua senha" variant="outlined" margin="dense" />
        </Stack>
    </Container>

export default Register

import React from 'react';
import {Grid, Box, Paper, Avatar, TextField, Stack, FormControlLabel, Checkbox, Button, Typography, Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Login = () => {
	const paperStyle={padding: 15, height: 'auto', width: 'auto', margin:"50px auto", fontFamily: 'Montserrat'}
	const avatarStyle={backgroundColor:'#8979F2'}
	const btnstyle={margin:'8px 0', backgroundColor:'#8979F2'}
	const boxgrid={ width:400, fontFamily:'Montserrat', margin:'auto'}
	const validationSchema = yup.object({
		email: yup
		  .string('Digite seu e-mail')
		  .email('Digite um e-mail valido')
		  .required('o e-mail é obrigatório'),
		password: yup
		  .string('Digite sua senha')
		  .min(5, 'A senha deve ter no mínimo 5 caracteres')
		  .required('Senha é obrigatória'),
	  });

	  const formik = useFormik({
		initialValues: {
		  email: '',
		  password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {

		}});

	return(

		<Box style={boxgrid}>
			<Paper elevation={10} style={paperStyle} align='center' >
				<Grid align='center' >
					<Avatar style={avatarStyle}><Stack><LockIcon/></Stack></Avatar>
					<h2 margin="dense">Entrar</h2>
				</Grid>
				<form onSubmit={formik.handleSubmit}>
				<TextField sx={{ width:'95%'}}  id="email" name="email" label="Usuário" placeholder="Digite seu e-mail" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} margin="dense"/>
				<TextField sx={{ width:'95%'}}  id="password" name="password" label="Senha" placeholder='Digite sua senha' type="password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} margin="dense"/>
				<FormControlLabel sx={{ paddingLeft: 1, float:'left'}}
				control={
					<Checkbox name="checkedB" color="primary"/>
					}
					label="Lembra-me"
				/>
				<Button  type='submit' color='primary' variant='contained' style={btnstyle} sx={{ width:'95%'}} >Sign In</Button>
				</form>
				<Typography >
					<Link href="#" >
						Esqueceu a senha?
					</Link>
				</Typography>
				<Typography> Ainda não possui conta?
					<Link href="#">
						Sign Up?
					</Link>
				</Typography>
			</Paper>

		</Box>
	)
}
export default Login

import { createTheme } from '@mui/material'

const theme = createTheme({
	typography: {
		fontFamily: [
			'Montserrat',
			'Arial'
		].join(',')
	},
	palette: {
		primaryColor: '#8979F2',
		secondaryColor: '#35F29A',
		tertiaryColor: '#27F27F',
		blackColor: '#0D0D0D',
		whiteColor: '#F2F2F2',
    grayColor: '#f1f2f6'
	}
})

export default theme

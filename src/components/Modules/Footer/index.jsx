import React from 'react'

import { Box, Grid } from '@mui/material'

import Logo from '../../Elements/Logo'
import Container from '../../Layouts/Container'

import FooterSiteMap from './FooterSiteMap'
import FooterSocial from './FooterSocial'

const Footer = () =>
	<Box component="footer" sx={{ py: 2, bgcolor: 'whiteColor', mt: 5 }}>
		<Container>
			<Grid container sx={{ display: 'flex', alignItems: 'center' }}>
				<Grid
					item xs={12}
					md={7}
					sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, py: 1 }}
				>
					<Logo flexGrowValue={0} />
				</Grid>

				<Grid
					item
					xs={12}
					md={3}
					sx={{ display: 'flex', justifyContent: 'center', borderRight: { xs: 0, md: 2 }, borderColor: { md: 'primaryColor' }, py: 1 }}
				>
					<FooterSiteMap />
				</Grid>

				<Grid
					item
					xs={12}
					md={2}
					sx={{ display: 'flex', justifyContent: 'center', py: 1 }}
				>
					<FooterSocial />
				</Grid>
			</Grid>
		</Container>
	</Box>

export default Footer

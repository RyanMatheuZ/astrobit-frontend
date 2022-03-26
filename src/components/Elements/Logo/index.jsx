import React from 'react'

import { Box } from '@mui/material'

const Logo = ({ flexGrowValue }) =>
	<Box
		component="div"
		sx={{ flexGrow: flexGrowValue }}
	>
		<img
			src={process.env.PUBLIC_URL + '/icons/logo/astrobit-logo.svg'}
			alt="Astrobit"
			title="Astrobit"
			draggable="false"
			width="70"
		/>
	</Box>

export default Logo

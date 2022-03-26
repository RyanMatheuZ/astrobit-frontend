import React from 'react'

import { List, ListItem } from '@mui/material'

const siteMap = [
	{
		label: 'Início',
		path: '/'
	},
	{
		label: 'Sobre',
		path: '/about'
	},
	{
		label: 'Mercado',
		path: '/market'
	}
]

const FooterSiteMap = () =>
	<List>
		<ListItem
			disablePadding
			sx={{ color: 'blackColor', justifyContent: { xs: 'center', md: 'flex-start' }, fontSize: 'h6.fontSize', fontFamily: 'Montserrat',fontWeight: 600 }}
		>
			Mapa do site
		</ListItem>
		{siteMap.map((item, i) => (
			<ListItem
				key={i}
				disablePadding
				sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, fontFamily: 'Montserrat', mt: 1 }}
			>
				{item.label}
			</ListItem>
		))}
	</List>

export default FooterSiteMap

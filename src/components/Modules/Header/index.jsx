import React, { useState } from 'react'

import {
	AppBar,
	Toolbar,
	Typography,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import Logo from '../../Elements/Logo'
import Container from '../../Layouts/Container'

const pages = [
	{ label: 'Início', path: '/' },
	{ label: 'Sobre', path: '/about' },
	{ label: 'Mercado', path: '/market' }
]

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget)
	const handleCloseNavMenu = () => setAnchorElNav(null)

	return (
		<AppBar position="fixed" component="header" sx={{ bgcolor: 'transparent', boxShadow: 0 }}>
			<Container>
				<Toolbar sx={{ my: 2 }}>
					<Logo flexGrowValue={1} />

					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((item, i) => (
							<Button
								key={i}
								onClick={handleCloseNavMenu}
								sx={{ color: 'blackColor', textTransform: 'capitalize', fontSize: 'h6.fontSize', fontWeight: 500, my: 2, px: 2, display: 'block' }}
							>
								{item.label}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon sx={{ color: 'secondaryColor' }} />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((item, i) => (
								<MenuItem
									key={i}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{item.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header

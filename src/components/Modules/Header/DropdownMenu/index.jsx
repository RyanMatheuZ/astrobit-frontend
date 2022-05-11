import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Avatar, Menu, MenuItem, ListItemIcon, IconButton, Tooltip, Divider } from '@mui/material'
import PersonAdd from '@mui/icons-material/PersonAdd'
import LoginIcon from '@mui/icons-material/Login'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const linkStyle = { color: '#0D0D0D' }

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Painel do usuário">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 40, height: 40, backgroundColor: '#8979F2' }}><AccountCircleIcon sx={{ backgroundColor: '#8979F2', width: 38, height: 38 }} /></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                display="none"
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Avatar fontSize="small" sx={{ backgroundColor: '#8979F2' }} />
                    </ListItemIcon>
                    Minha conta
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" sx={{ color: '#8979F2' }} />
                    </ListItemIcon>
                    <Link to="/register" style={linkStyle}>Cadastre-se</Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <LoginIcon fontSize="small" sx={{ color: '#8979F2' }} />
                    </ListItemIcon>
                    <Link to="/login" style={linkStyle}>Entrar</Link>
                </MenuItem>
            </Menu>
        </>
    );

}

export default DropdownMenu
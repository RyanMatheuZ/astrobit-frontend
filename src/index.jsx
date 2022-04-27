import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import Home from './views/Home'
import Market from './views/Market'
import Login from './views/Login'
import Register from './views/Register'
import './styles/global.css'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

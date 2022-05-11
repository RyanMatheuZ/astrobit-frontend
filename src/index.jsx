import React from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import Home from './views/Home'
import About from './views/About'
import Market from './views/Market'
import Contact from './views/Contact'
import Login from './views/Login'
import Register from './views/Register'
import Reset from './views/Reset_Password'
import './styles/global.css'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<Market />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset/>}/>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
